import { Router } from "express";
import { getUsers } from "../controller/user";
import { auth } from "../middlewares/auth";

const userRouter = Router();
userRouter.get("/", auth, getUsers);

export default userRouter;
