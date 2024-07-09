import { Request, Response } from "express";
import * as authServices from "../service/auth";

export const login = async (req: Request, res: Response) => {
  const { body } = req;
  const data = await authServices.login(body);
  res.json(data);
};

export const signUp = async (req: Request, res: Response) => {
  const { body } = req;
  const data = await authServices.signUp(body);
  // res.json(data);
  if (data) {
    res.status(201).json({ message: "created successfully" });
  } else {
    res.status(409).json({ message: "email already exists" });
  }
};
