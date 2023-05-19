import dotenv from "dotenv";
dotenv.config();

export const {
  PORT,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_FROM,
}: any = process.env;
