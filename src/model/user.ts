import { User } from "../interface/user";

const users: User[] = [];

export const createUser = (user: User) => {
  const newUser = {
    ...user,
    id: users.length + 1,
  };
  users.push(newUser);
};

export const getUsers = () => {
  return users;
};

export const getUserByEmail = (email: string) => {
  return users.find((user) => user.email === email);
};
