import { Router } from "express";
import { addTask, getTasks, updateTask, deleteTask } from "../controller/todo";
import { auth } from "../middlewares/auth";

const todoRouter = Router();
todoRouter.post("/", auth, addTask);
todoRouter.get("/", auth, getTasks);
todoRouter.put("/:id", auth, updateTask);
todoRouter.delete("/:id", auth, deleteTask);

export default todoRouter;
