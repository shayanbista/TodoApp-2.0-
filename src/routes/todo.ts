import { Router } from "express";
import { addTask, getTasks, updateTask, deleteTask } from "../controller/todo";

const todo_router = Router();
todo_router.post("/", addTask);
todo_router.get("/", getTasks);
todo_router.put("/:id", updateTask);
todo_router.delete("/:id", deleteTask);

export default todo_router;
