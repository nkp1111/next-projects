import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function handleRegister(
  e: FormEvent<HTMLFormElement>,
  registerData: StudentType,
  router: AppRouterInstance,
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
      router.push("/timetable")
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}
