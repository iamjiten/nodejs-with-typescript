import { Request } from "express";
import { UserType } from "../types/user.type";
import {
  createUser,
  deleteUser,
  getUserBy,
  getUserByEmail,
  getUsers,
  updateUser,
} from "../repos/user.repo";

export const getUsersHandler = async (req: any, res: any) => {
  const users = await getUsers(req.query);
  return res.json({ users });
};

export const createUserHandler = async (req: Request, res: any) => {
  const body = req.body;
  const emailExist = await getUserByEmail(body.email);
  if (emailExist) {
    return res
      .status(422)
      .json({ error: true, message: "Email already exist" });
  }
  const createdUser = await createUser(body);
  return res.json({ user: createdUser });
};

export const updateUserHandler = async (req: Request, res: any) => {
  const { id } = req.params;
  try {
    const existUser = await getUserBy({ id: Number(id) });

    if (!existUser)
      return res.status(404).json({ error: true, message: "User Not Foud" });

    const user = await updateUser(Number(id), req.body);
    return res.json({ user });
  } catch (err: any) {
    return res.status(500).json({ error: true, message: err.message });
  }
};

export const deleteUserHandler = async (req: Request, res: any) => {
  const { id } = req.params;
  try {
    const existUser = await getUserBy({ id: Number(id) });

    if (!existUser)
      return res.status(404).json({ error: true, message: "User Not Foud" });

    const user = await deleteUser(Number(id));
    if (user?.affected && user.affected >= 1) {
      return res.json({ error: false, message: "User deleted" });
    }
    return res
      .status(500)
      .json({ error: true, message: "Something went wrong" });
  } catch (err: any) {
    return res.status(500).json({ error: true, message: err.message });
  }
};
