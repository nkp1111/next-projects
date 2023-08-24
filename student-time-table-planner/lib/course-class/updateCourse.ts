import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { hideNotification, showNotification } from "../general/notification";

export default async function updateCourse(
  courseData: CourseType,
  router: AppRouterInstance,
) {
  try {
    showNotification({ title: "Update Course", message: "Processing...", loading: true });
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
    hideNotification();
    if (data.success) {
      showNotification({ title: "Update Course", message: data.success, });
      console.log(data.success)
      router.push(`/course/${courseData._id}`)
    } else {
      showNotification({ title: "Update Course", message: data.error, error: true, });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "Update Course", message: error as string, error: true, });
  }
}