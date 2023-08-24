import { StudentType } from "@/types";
import { SERVER_URL } from "@/constant";
import { Dispatch, SetStateAction } from "react";
import { hideNotification, showNotification } from "../general/notification";

export default async function myCourseClass(
  setCurrentStudentDetail: Dispatch<SetStateAction<StudentType>>,
  classIncludes: string = "false"
) {
  try {
    showNotification({ title: "My Course", message: "Processing...", loading: true });
    const loginUrl = SERVER_URL + `/api/student?class=${classIncludes}`
    const res = await fetch(loginUrl, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      next: { revalidate: 0 },
    })
    const data = await res.json();
    hideNotification();
    if (data.success) {
      showNotification({ title: "My Course", message: data.success });
      setCurrentStudentDetail(data.student);
    } else {
      showNotification({ title: "My Course", message: data.error, error: true });
    }
  } catch (error) {
    hideNotification();
    showNotification({ title: "My Course", message: error as string, error: true });
  }
}
