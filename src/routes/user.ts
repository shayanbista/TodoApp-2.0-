import { Router } from "express";
import { addTask, getTasks, updateTask, deleteTask } from "../controller/todo";
import { createUser, getUsers } from "../controller/user";

const userRouter = Router();
userRouter.post("/", createUser);
userRouter.get("/", getUsers);

export default userRouter;
