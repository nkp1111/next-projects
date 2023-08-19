import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { FormEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function addNewCourse(
  e: FormEvent<HTMLFormElement>,
  courseData: CourseType,
  router: AppRouterInstance,
) {
  try {
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
    if (data.success) {
      console.log(data.success)
      // router.push("/timetable")
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}
