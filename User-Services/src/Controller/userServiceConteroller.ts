import { User } from "../model/auth.model";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../Config";
import { Sender } from "../utils/rabbitMq";
import { actions } from "../Config/actions";
// import { rabbitInstance } from "../utils/rabbitMq";

const createUser = async (call, cb) => {
  // Our register logic starts here
  try {
    // Get user input
    const { emailorphone } = call.request;
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      $or: [{ email: emailorphone }, { phone: emailorphone }],
    });

    if (oldUser) {
      return cb(new Error("User Already Exist. Please Login "), null);
    }

    // Generate random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    if (emailorphone.includes("@")) {
      // Email verification
      // Code to send OTP via email
      const createObj = {
        email: emailorphone,
        code: otp,
        expireIn: new Date().getTime() + 300 * 1000,
      };
      const userData = await User.create(createObj);
      if (!userData) {
        return cb(null, {
          status: "fail",
          message: "User is Not Created",
        });
      }
      // send mail through rabbit mq
      const data = { ...createObj, action: "register_mail" };
      //Rabbit MQ sender
      Sender(data);
      //Rabbit MQ Receiver
      return cb(null, {
        status: 200,
        message: "Otp is Send please check your email",
      });
    } else {
      // Phone verification Through Send Rabbit MQ...........
      // rabbitInstance.sendMessage("number", { name: "sammer" });
      cb(null, {
        success: 200,
        message: "Otp is Send please check your Phone",
      });
    }
  } catch (err) {
    console.log("catch ererererew");
    console.log(err);
  }
};
const verifyOtp = async (req, res) => {
  const { code } = req.body;
  const user = await User.findOne({ code: code });
  //find single user
  // const saved_user = await User.findOne({ email: emailorphone });
  // GEnerate JWT token
  // const token = jwt.sign({ userID: saved_user?._id }, JWT_SECRET_KEY, {
  //   expiresIn: "1d",
  // });
  if (!user) {
    return res.json({
      status: "failed",
      message: "otp is incorrect",
    });
  }
  if (user) {
    const currentTime = new Date().getTime();
    const diff = user?.expireIn - currentTime;
    if (diff < 0) {
      return res.json({
        status: "failed",
        message: "Resend Otp because Otp is expire",
      });
    }
  }
  if (code == user.code) {
    res.send("You has been successfully registered");
  } else {
    res.render("otp", { msg: "otp is incorrect" });
  }
};

export { createUser, verifyOtp };
