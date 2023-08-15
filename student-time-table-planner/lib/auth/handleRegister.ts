import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";

export default async function handleRegister(
  e: FormEvent<HTMLFormElement>,
  registerData: StudentType
) {
  try {
    e.preventDefault();
    const registerUrl = SERVER_URL + "/api/register"
    const res = await fetch(registerUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData)
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
