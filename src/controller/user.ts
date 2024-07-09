import { Request, Response } from "express";
import * as userService from "../service/user";

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();
  if (users) res.status(200).json({ message: users });
  else res.status(404).json({ message: "User not found!" });
};
