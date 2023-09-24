import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export default async function getCurrentUserData(
  setUserData: Dispatch<SetStateAction<{}>>
) {
  const res = await fetch("/api/currentUser", {
    credentials: "include",
  })
  const { success, error, user } = await res.json();
  if (error) {
    toast.error(error);
  }
  if (success) {
    setUserData(user);
  }
}
