import { compare, hash } from "bcrypt";


export async function hashPassword(password: string) {
  return await hash(password, 10);
}

export async function comparePassword(password: string, encryptedPassword: string) {
  return await compare(password, encryptedPassword);
}
