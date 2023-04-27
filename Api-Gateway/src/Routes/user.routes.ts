import express from "express";
import UserPath from "../constants/path.constant";
import { Login } from "../ControllerReq/userConteroller";

import LoginValidation from "../Validation/user";

const userRouter = express.Router();

// SignUp User
userRouter.post(UserPath.LOGIN, LoginValidation, Login);
// Login User
// userRouter.post(LOGIN, loginUser);
// Resend Otp
// userRouter.post(RESEND_OTP, resendOtp);
// Verify Otp
// userRouter.post(VERIFY_OTP, verifyOtp);

export default userRouter;
