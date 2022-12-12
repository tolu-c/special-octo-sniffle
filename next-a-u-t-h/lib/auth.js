import { hash } from "bcryptjs";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 16);
  return hashedPassword;
};
