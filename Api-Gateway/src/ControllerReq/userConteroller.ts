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
