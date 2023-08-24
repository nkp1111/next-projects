import { SERVER_URL } from "@/constant";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { hideNotification, showNotification } from "../general/notification";

// delete course from database 
export default async function removeCourse(
  courseId: string,
  router: AppRouterInstance,
) {
  try {
    showNotification({ title: "Delete Course", message: "Processing...", loading: true });
    const courseUrl = SERVER_URL + "/api/course/" + courseId;
    const res = await fetch(courseUrl, {
      method: "DELETE"
    });
    const data = await res.json();
    hideNotification();
    if (data.success) {
      showNotification({ title: "Delete Course", message: data.success });
      window.location.reload();
    } else {
      showNotification({ title: "Delete Course", message: data.error, error: true, });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "Delete Course", message: error as string, error: true, });
  }
}