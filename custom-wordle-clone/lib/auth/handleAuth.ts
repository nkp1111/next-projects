import { UserSchema } from '@/type';
import toast from 'react-hot-toast';
import { Dispatch, SetStateAction } from "react";

/**
 * @desc handle authentication (signin and signup)
 * @param isSignUp boolean 
 * @param user user {email,password,username?}
 * @param setUserData set detail user data after authentication
 */
export default async function handleAuth(
  isSignUp: boolean,
  user: UserSchema,
  setUserData: Dispatch<SetStateAction<{}>>,
) {
  try {
    const authUrl = isSignUp ? "/api/signUp" : "/api/signIn";
    const res = await fetch(authUrl, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    })

    const { success, error, user: newUser, message } = await res.json()
    if (success) {
      setUserData(newUser);
      toast.success(message);
    } else {
      toast.error(error);
    }
  } catch (error) {
    toast.error(JSON.stringify(error));
  }
}
