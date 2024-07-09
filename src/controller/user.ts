import { Request, Response } from "express";
import * as userService from "../service/user";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const newUser = await userService.createUser(data);

  if (newUser) {
    res.status(201).json({ message: "created successfully" });
  } else {
    res.status(409).json({ message: "email already exists" });
  }
};

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();
  if (users) res.status(200).json({ message: users });
  else res.status(404).json({ message: "User not found!" });
};
