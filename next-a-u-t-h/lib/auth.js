import { hash, compare } from "bcryptjs";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 16);
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
