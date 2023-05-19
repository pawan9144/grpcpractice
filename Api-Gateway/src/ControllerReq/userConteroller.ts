import { Request, Response } from "express";
import { client } from "../utils/user.service";

const Login = (req: Request, res: Response) => {
  if (!req.body.emailorphone) {
    return res.json({
      statueCode: 400,
      message: "email is required.",
    });
  }
  client.createUser(req.body, (err: any, data: any) => {
    console.log("🚀 ~ file: userConteroller.ts:12 ~ client.createUser ~ data:", data);
    if (err) {
      return res.json({
        statueCode: 400,
        message: err.message,
      });
    }
    return res.json({
      statueCode: data.status,
      message: data.message,
    });
  });
  return true;
};
const verifyOtp = (req: Request, res: Response) => {
  if (!req.body.otp) {
    return res.json({
      statueCode: 400,
      message: "email is required.",
    });
  }
  client.createUser(req.body, (err: any, data: any) => {
    if (err) {
      return res.json({
        statueCode: 400,
        message: err.details,
      });
    }
    return res.json({
      statueCode: 200,
      message: "Login successfully.",
      data,
    });
  });
  return true;
};
const ResendOtp = (req: Request, res: Response) => {
  if (!req.body.email) {
    return res.json({
      statueCode: 400,
      message: "email is required.",
    });
  }
  client.createUser(req.body, (err: any, data: any) => {
    if (err) {
      return res.json({
        statueCode: 400,
        message: err.details,
      });
    }
    return res.json({
      statueCode: 200,
      message: "Login successfully.",
      data,
    });
  });
  return true;
};
export { Login, verifyOtp, ResendOtp };
// const accountSid = "your-account-sid";
// const authToken = "your-auth-token";
// const client = twilio(accountSid, authToken);

// app.post("/login", (req, res) => {
//   const emailOrPhone = req.body.emailOrPhone;
//   const otp = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit OTP
//   if (emailOrPhone.includes("@")) {
//     // Email verification
//     // Code to send OTP via email
//   } else {
//     // Phone verification
//     client.messages
//       .create({
//         body: `Your OTP for login is ${otp}`,
//         from: "your-twilio-phone-number",
//         to: emailOrPhone,
//       })
//       .then((message) => {
//         res.send({ success: true, message: "OTP sent successfully" });
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).send({ success: false, message: "Failed to send OTP" });
//       });
//   }
// });
// app.post("/verify", (req, res) => {
//   const emailOrPhone = req.body.emailOrPhone;
//   const otp = req.body.otp;
//   // Verify OTP
//   if (otp === "1234") {
//     // Replace with actual OTP verification logic
//     res.send({ success: true, message: "Login successful" });
//   } else {
//     res.status(401).send({ success: false, message: "Invalid OTP" });
//   }
// });
