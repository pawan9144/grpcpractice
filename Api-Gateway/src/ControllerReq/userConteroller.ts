import { Request, Response } from "express";
import { client } from "../utils/user.service";

const UserSignup = (req: Request, res: Response) => {
  if (!req.body.email) {
    return res.json({
      statueCode: 400,
      message: "email is required.",
    });
  }
  if (!req.body.name) {
    return res.json({
      statueCode: 400,
      message: "name is required.",
    });
  }
  client.createUser(req.body, (err: any, data: any) => {
    if (err) {
      return res.json({
        statueCode: 400,
        message: err.details,
      });
    }
    console.log(data);
    return res.json({
      statueCode: 200,
      message: "signup successfully.",
      data,
    });
  });
  return true;
  //   console.log("in uesr signup function", client.createUser);
};
export default UserSignup;
