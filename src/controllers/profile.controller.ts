import { getUserById } from "../repos/user.repo";

export const profileHandler = async (req: any, res: any) => {
  const user = req.user;

  const dbUser = await getUserById(user.id);
  return res.json({ dbUser });
};
