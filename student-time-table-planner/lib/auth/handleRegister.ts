import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { hideNotification, showNotification } from "../general/notification";

export default async function handleRegister(
  e: FormEvent<HTMLFormElement>,
  registerData: StudentType,
  router: AppRouterInstance,
) {
  try {
    showNotification({ title: "Register", message: "Register processing...", loading: true })
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
    hideNotification();
    if (data.success) {
      showNotification({ title: "Register", message: data.success });
      router.push("/timetable")
    } else {
      showNotification({ title: "Register", message: data.error, error: true });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "Register", message: error as string, error: true });
  }
}
