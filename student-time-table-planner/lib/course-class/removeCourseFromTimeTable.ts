import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";


export default async function removeCourseFromTimeTable(
  courseId: string,
  courseIdToRemove: string,
  classId: string,
  setCurrentStudentDetail: Dispatch<SetStateAction<StudentType>>,
) {
  try {
    const courseUrl = SERVER_URL + `/api/course/${courseId}/me`;
    const res = await fetch(courseUrl, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classId, courseId: courseIdToRemove }),
    });
    const data = await res.json();
    if (data.success) {
      console.log(data.success);
      setCurrentStudentDetail({
        _id: "",
        name: "",
        email: "",
        password: "",
        photo: "",
        bio: "",
        courses: [],
        classes: [],
      })
      window.location.reload();
    } else {
      console.log("User error", data.error)
    }
  } catch (error) {
    console.log("System error", error)
  }
}