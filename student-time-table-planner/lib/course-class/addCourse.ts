import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { hideNotification, showNotification } from "../general/notification";

export default async function addNewCourse(
  e: FormEvent<HTMLFormElement>,
  courseData: CourseType,
  router: AppRouterInstance,
) {
  try {
    showNotification({ title: "Add New Course", message: "Processing...", loading: true })
    e.preventDefault();
    const loginUrl = SERVER_URL + "/api/course"
    const res = await fetch(loginUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData)
    })
    const data = await res.json();
    hideNotification();
    if (data.success) {
      showNotification({ title: "Add New Course", message: data.success })
      router.push("/course")
    } else {
      showNotification({ title: "Add New Course", message: data.error, error: true })
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "Add New Course", message: error as string, error: true })
  }
}
