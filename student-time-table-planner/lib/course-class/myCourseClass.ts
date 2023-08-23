import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";

export default async function myCourseClass(
  setCurrentStudentDetail: Dispatch<SetStateAction<StudentType>>,
  classIncludes: string = "false"
) {
  try {
    const loginUrl = SERVER_URL + `/api/student?class=${classIncludes}`
    const res = await fetch(loginUrl, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      next: { revalidate: 0 },
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
