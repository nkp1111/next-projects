import { UserType } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function handleSignIn(
  event: React.FormEvent<HTMLFormElement>,
  userData: UserType,
  router: AppRouterInstance,
) {
  event.preventDefault();
  const signInUrl = "/api/signin";
  try {
    const res = await fetch(signInUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    const data = await res.json();

    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.success)
      router.push("/")
    }
  } catch (error) {
    console.log("system error", error)
  }
}
