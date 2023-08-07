import User from "@/model/user";

export default async function getAllUsers() {
  const users = await User.find();
  return users;
}
