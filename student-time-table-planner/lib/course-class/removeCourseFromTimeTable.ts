import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";
import { hideNotification, showNotification } from "../general/notification";


export default async function removeCourseFromTimeTable(
  courseId: string,
  courseIdToRemove: string,
  classId: string,
  setCurrentStudentDetail: Dispatch<SetStateAction<StudentType>>,
) {
  try {
    showNotification({ title: "Remove Course From TimeTable", message: "Processing...", loading: true });
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
    hideNotification();
    if (data.success) {
      showNotification({ title: "Remove Course From TimeTable", message: data.success });
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
      showNotification({ title: "Remove Course From TimeTable", message: data.error, error: true, });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "Remove Course From TimeTable", message: error as string, error: true, });
  }
}