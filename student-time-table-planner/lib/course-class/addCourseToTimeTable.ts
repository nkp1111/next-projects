import { SERVER_URL } from "@/constant";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { hideNotification, showNotification } from "../general/notification";

export default async function addCourseToTimeTable(
  courseId: string,
  classes: string,
  router: AppRouterInstance,
) {
  try {
    showNotification({ title: "Add Course To TimeTable", message: "Processing...", loading: true });
    const courseUrl = SERVER_URL + `/api/course/${courseId}/me`;
    const res = await fetch(courseUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classes }),
    });
    const data = await res.json();
    hideNotification();
    if (data.success) {
      showNotification({ title: "Add Course To TimeTable", message: data.success, });
      router.push("/timetable")
    } else {
      showNotification({ title: "Add Course To TimeTable", message: data.error, error: true, });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "Add Course To TimeTable", message: error as string, error: true, });
  }
}