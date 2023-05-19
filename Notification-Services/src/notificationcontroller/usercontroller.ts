import { transporter } from "../Services/emailservice";
import { EMAIL_FROM } from "../config";

export const SendEmailUser = async (data: any) => {
  console.log(">>>>>>trigger function", data.data);
  const { email, code } = data.data;
  // Our register logic starts here
  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: EMAIL_FROM, // sender address
      to: email, // list of receivers
      subject: "Bsic-Crud _ Reset Password Link", // Subject line
      text: "Click below button to reset password", // plain text body
      // html: `<a href=${link}>Click Here</a>`, // html body
      html:
        "<h3>OTP for account verification is </h3>" +
        "<h1 style='font-weight:bold;'>" +
        code +
        "</h1>", // html body
    });
    console.log({
      status: "success",
    });
  } catch (error) {
    console.log("error", error);
  }
};
