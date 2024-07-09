import { Todo } from "../interface/task";
import { Tasklist } from "../interface/tasklist";

export const taskList: Tasklist = [];

export const addTask = (newTask: Todo) => {
  const task = {
    id: taskList.length + 1,
    taskName: newTask.taskName,
    createdAt: new Date(),
    isCompleted: false,
    deletedAt: null,
  };
  taskList.push(task);
};

export const getTasks = () => {
  return taskList;
};

export const findTaskIndexById = (id: number): number => {
  return taskList.findIndex((task) => task.id === id);
};

export const updateTask = (id: number, updatedData: Todo, index: number) => {
  taskList[index] = { ...taskList[index], ...updatedData };
  return taskList[index];
};

export const deleteTask = (index: number): void => {
  taskList.splice(index, 1);
};
