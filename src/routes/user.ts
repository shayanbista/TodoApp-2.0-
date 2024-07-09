import { Router } from "express";
import { addTask, getTasks, updateTask, deleteTask } from "../controller/todo";
import { createUser, getUsers } from "../controller/user";
import { auth } from "../middlewares/auth";

const userRouter = Router();
userRouter.post("/", createUser);
userRouter.get("/", auth, getUsers);

export default userRouter;
