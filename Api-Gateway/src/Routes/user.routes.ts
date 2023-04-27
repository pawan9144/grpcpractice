import express from "express";

import UserSignup from "../ControllerReq/userConteroller";

const userRouter = express.Router();

userRouter.post("/sigunp", UserSignup);

export default userRouter;
