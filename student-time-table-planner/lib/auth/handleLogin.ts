import { StudentLoginType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { showNotification, hideNotification } from "../general/notification";

export default async function handleLogin(
  e: FormEvent<HTMLFormElement>,
  loginData: StudentLoginType,
  router: AppRouterInstance,
) {
  try {
    e.preventDefault();
    showNotification({ title: "Login", message: "Login processing...", loading: true });
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
    hideNotification();
    if (data.success) {
      showNotification({ title: "Login", message: data.success });
      router.push("/timetable")
    } else {
      showNotification({ title: "Login", message: data.error, error: true });
    }
  } catch (error) {
    hideNotification();
    console.log(error)
    showNotification({ title: "Login", message: JSON.stringify(error), error: true });
  }
}
