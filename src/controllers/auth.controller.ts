import { verifyHash } from "../utils/auth.utils";
import { getUserBy } from "../repos/user.repo";
import { singToken } from "../utils/jwt.util";

export const loginHandler = async (req: Request, res: any) => {
  const body: any = req.body;

  const user = await getUserBy({ emailAddress: body.email });

  if (!user)
    return res
      .status(404)
      .json({ success: false, message: "Email does not exist" });
  const isPwdMatch = await verifyHash(user.password, body.password);

  if (!isPwdMatch)
    return res
      .status(401)
      .json({ success: false, message: "Email/password invalid" });

  const token = await singToken({
    sub: user.id,
    email: user.emailAddress,
  });

  return res.json({ token });
};
