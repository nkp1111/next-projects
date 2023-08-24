import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";
import { hideNotification, showNotification } from "../general/notification";

export default async function getAllCourses(
  setAllCourses: Dispatch<SetStateAction<CourseType[]>>,
) {
  try {
    showNotification({ title: "All Course", message: "All Courses are being fetched", loading: true })
    const courseUrl = SERVER_URL + "/api/course"
    const res = await fetch(courseUrl)
    const data = await res.json();
    hideNotification();
    if (data.success) {
      showNotification({ title: "All Course", message: data.success });
      setAllCourses(data.courses);
    } else {
      showNotification({ title: "All Course", message: data.error, error: true, });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "All Course", message: error as string, error: true });
  }
}