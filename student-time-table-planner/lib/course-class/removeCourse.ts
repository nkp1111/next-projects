import { SERVER_URL } from "@/constant";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function removeCourse(
  courseId: string,
  router: AppRouterInstance,
) {
  try {
    const courseUrl = SERVER_URL + "/api/course/" + courseId;
    const res = await fetch(courseUrl, {
      method: "DELETE"
    });
    const data = await res.json();
    if (data.success) {
      console.log(data.success)
      window.location.reload();
      router.push("/course")
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}