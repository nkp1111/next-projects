import { StudentLoginType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";

export default async function handleLogin(
  e: FormEvent<HTMLFormElement>,
  loginData: StudentLoginType
) {
  try {
    e.preventDefault();
    const loginUrl = SERVER_URL + "/api/login"
    const res = await fetch(loginUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData)
    })
    const data = await res.json();
    if (data.success) {
      console.log(data.success)
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}
