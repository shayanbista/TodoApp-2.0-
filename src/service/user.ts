import bcrypt from "bcrypt";
import { User } from "../interface/user";
import * as userModel from "../model/user";

export const createUser = async (user: User) => {
  const existingUser = getUserByEmail(user.email);
  if (existingUser) {
    console.log("existing user");
    return null;
  } else {
    console.log("user can be created");
    const password = await bcrypt.hash(user.password, 10);
    const newUser = userModel.createUser({ ...user, password });
    return true;
  }
};

export const getUsers = () => {
  const users = userModel.getUsers();
  if (users.length == 0) {
    return null;
  } else return users;
};

export const getUserByEmail = (email: string) => {
  return userModel.getUserByEmail(email);
};
