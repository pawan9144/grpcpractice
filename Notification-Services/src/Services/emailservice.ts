import { EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from "../config";

import nodemailer from "nodemailer";

export let transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER, // Admin Gmail Id
    pass: EMAIL_PASS, // Admin Gmail Password
  },
});
