import jwt from "jsonwebtoken";

export const singToken = async (payload: any) => {
  const secret = process.env.JWT_SECRET || "secret";
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

export const verifyToken = async (token: string) => {
  const secret = process.env.JWT_SECRET || "secret";
  try {
    const decoded = await jwt.verify(token, secret);
    return decoded;
  } catch (err: any) {
    throw new Error(err);
  }
};
