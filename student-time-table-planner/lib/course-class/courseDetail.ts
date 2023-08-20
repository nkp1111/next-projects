import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";

export default async function courseDetail(
  courseId: string,
  setDetailedCourse: Dispatch<SetStateAction<CourseType>>,
) {
  try {
    const courseUrl = SERVER_URL + "/api/course/" + courseId;
    const res = await fetch(courseUrl);
    const data = await res.json();
    if (data.success) {
      console.log(data.success)
      setDetailedCourse(data.course);
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}