import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import config from "../config";

export function auth(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    if (!authorization) {
      return res.status(401).json({ error: "no authentication header" });
    }
  }

  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    if (!authorization) {
      return res.status(401).json({ error: "Access denied!" });
    }
  }

  verify(token[1], config.jwt.secret!);

  next();
}
