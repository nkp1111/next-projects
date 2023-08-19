import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";

export default async function getAllCourses(
  setAllCourses: Dispatch<SetStateAction<CourseType[]>>,
) {
  try {
    const courseUrl = SERVER_URL + "/api/course"
    const res = await fetch(courseUrl)
    const data = await res.json();
    if (data.success) {
      console.log(data.success)
      setAllCourses(data.courses);
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}