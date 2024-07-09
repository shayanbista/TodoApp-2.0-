import { sign } from "jsonwebtoken";
import { User } from "../interface/user";
import bcrypt from "bcrypt";
import config from "../config";

import * as userService from "./user";

export async function login(body: Pick<User, "email" | "password">) {
  const existingUser = userService.getUserByEmail(body.email);
  if (!existingUser) {
    return { error: "Invalid enail or password" };
  }
  const isvalidPassword = await bcrypt.compare(
    body.password,
    existingUser.password
  );
  if (!isvalidPassword) {
    return { error: "Invalid email or password" };
  }

  const payload = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  };

  const s = config.jwt.secret!;
  const accessToken = await sign(payload, s, {
    expiresIn: config.jwt.accessExpiration,
  });
  const refreshToken = await sign(payload, s, {
    expiresIn: config.jwt.refreshTokenExpiration,
  });
  return { accessToken, refreshToken };
}
