import { ClassType, CourseType, StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default async function myCourseClass(
  setCurrentStudentDetail: Dispatch<SetStateAction<StudentType>>
) {
  try {
    const loginUrl = SERVER_URL + "/api/student"
    const res = await fetch(loginUrl, {
      method: "GET",
      credentials: "include",
    })
    const data = await res.json();
    if (data.success) {
      console.log(data.success);
      setCurrentStudentDetail(data.student);
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}
