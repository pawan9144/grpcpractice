import dotenv from "dotenv";
dotenv.config();

export const { DATABASE_URL, JWT_SECRET_KEY }: any = process.env;
