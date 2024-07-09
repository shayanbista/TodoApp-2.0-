import { Request } from "express";
import { Response } from "express";
import * as todoService from "../service/todo";

export const addTask = (req: Request, res: Response) => {
  const newTask = req.body;
  const task = todoService.addTask(newTask);
  res.status(201).json({ message: "Succesfully added!" });
};

export const getTasks = (req: Request, res: Response) => {
  const tasks = todoService.getTasks();
  if (!tasks) {
    res.status(404).json({ message: "List is empty!" });
  } else {
    res.status(200).json({ message: tasks });
  }
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const exisitingTask = todoService.updateTask(Number(id), data);
  if (!exisitingTask) {
    res.status(404).json({ message: "List is empty!" });
  } else {
    res.status(201).json({ message: "Updated successfully!" });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  const id = req.params;
  const deleteTask = todoService.deleteTask(Number(id));
  if (!deleteTask) {
    res.status(404).json({ message: "List is empty!" });
  } else {
    res.status(201).json({ message: "deleted successfully!" });
  }
};
