import { Todo } from "../interface/task";
import * as todoModel from "../model/todo";

export const addTask = (newTask: Todo) => {
  const task = todoModel.addTask(newTask);
  return true;
};

export const getTasks = () => {
  const tasks = todoModel.getTasks();
  if (tasks.length === 0) return null;
  return tasks;
};

export const updateTask = (id: number, updatedData: Todo) => {
  const index = todoModel.findTaskIndexById(id);
  if (index == -1) return null;
  else return todoModel.updateTask(id, updatedData, index);
};

export const deleteTask = (id: number) => {
  const index = todoModel.findTaskIndexById(id);
  if (index == -1) return null;
  else return todoModel.deleteTask(id);
};
