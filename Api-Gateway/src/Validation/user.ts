import { NextFunction, Request, Response } from "express";
import joi from "joi";

// const signupValidation = (req, res, next) => {
//   const schema = joi.object({
//     name: joi.string().min(2).max(20).regex(/^p/),
//     email: joi.string().email().required(),
//     password: joi.string(),
//     confirmpassword: joi.string().required(),
//     tc: joi.boolean().required(),
//   });
//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.json({
//       success: false,
//       message: error.details[0].message,
//     });
//   }
//   next();
//   return true;
// };

const LoginValidation = (req: Request, res: Response, next: NextFunction) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.json({
      success: false,
      message: error.details[0].message,
    });
  }
  next();
  return true;
};
export default LoginValidation;
