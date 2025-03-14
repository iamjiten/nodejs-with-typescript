import bcryptjs from "bcryptjs";

export const generateHash = async (plainTxt: string): Promise<string> => {
  const salt = 10;
  const hash = await bcryptjs.hashSync(plainTxt, salt);
  return hash;
};
export const verifyHash = (hash: string, plainText: string) => {
  return bcryptjs.compareSync(plainText, hash);
};
