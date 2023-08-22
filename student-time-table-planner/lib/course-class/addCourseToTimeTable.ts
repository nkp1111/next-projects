import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function addCourseToTimeTable(
  courseId: string,
  classes: string,
  router: AppRouterInstance,
) {
  try {
    const courseUrl = SERVER_URL + "/api/course/" + courseId;
    const res = await fetch(courseUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classes }),
    });
    const data = await res.json();
    if (data.success) {
      console.log(data.success);
      router.push("/timetable")
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}