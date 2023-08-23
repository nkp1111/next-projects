import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function updateCourse(
  courseData: CourseType,
  router: AppRouterInstance,
) {
  try {
    const courseUrl = SERVER_URL + "/api/course/" + courseData._id;
    const res = await fetch(courseUrl, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData)
    });
    const data = await res.json();
    if (data.success) {
      console.log(data.success)
      router.push(`/course/${courseData._id}`)
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}