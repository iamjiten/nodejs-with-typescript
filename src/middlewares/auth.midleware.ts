import { NextFunction, Request } from "express";
import { verifyToken } from "../utils/jwt.util";
import { getUserById } from "../repos/user.repo";

export const CheckAuth = async (req: Request, res: any, next: NextFunction) => {
  try {
    const requesToken = req.headers.authorization;
    if (!requesToken)
      return res.status(401).json({ status: false, message: "Token Missing" });
    const splitToken = requesToken.split(" ");
    const token = splitToken[1];
    const decodedToken = await verifyToken(token);
    const user = await getUserById(Number(decodedToken.sub));
    req.user = {
      id: user.id,
      email: user.emailAddress,
    };
    next();
  } catch (err: any) {
    return res.status(401).json({ status: false, message: "Invalid Token" });
  }
};
