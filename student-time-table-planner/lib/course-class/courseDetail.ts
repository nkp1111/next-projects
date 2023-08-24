import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";
import { hideNotification, showNotification } from "../general/notification";

export default async function courseDetail(
  courseId: string,
  setDetailedCourse: Dispatch<SetStateAction<CourseType>>,
) {
  try {
    showNotification({ title: "Course Detail", message: "Processing...", loading: true })
    const courseUrl = SERVER_URL + "/api/course/" + courseId;
    const res = await fetch(courseUrl);
    const data = await res.json();
    hideNotification()
    if (data.success) {
      showNotification({ title: "Course Detail", message: data.success })
      setDetailedCourse(data.course);
    } else {
      showNotification({ title: "Course Detail", message: data.error, error: true })
    }
  } catch (error) {
    hideNotification()
    showNotification({ title: "Course Detail", message: error as string, error: true, })
  }
}