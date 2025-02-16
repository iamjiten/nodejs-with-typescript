import { UserType } from "../types/user.type";

const users: Array<UserType> = [
  {
    id: 1,
    username: "jiten",
    password: "jiten@123",
  },
  {
    id: 2,
    username: "Rajesh",
    password: "rajesh@123",
  },
  {
    id: 3,
    username: "Chiru",
    password: "chiru@123",
  },
];

export const getUsers = (req: any, res: any) => {
  return res.json({ users: users });
};
