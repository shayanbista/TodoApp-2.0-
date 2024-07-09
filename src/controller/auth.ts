import { Request, Response } from "express";
import * as authServices from "../service/auth";

export async function login(req: Request, res: Response) {
  const { body } = req;
  const data = await authServices.login(body);
  res.json(data);
}
