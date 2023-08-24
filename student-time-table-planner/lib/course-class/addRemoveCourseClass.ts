import { ClassType, CourseType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { showNotification } from "../general/notification";


// add class to the course
export const addClass = (
  classData: ClassType,
  setCourseData: Dispatch<SetStateAction<CourseType>>,
  setClassData: Dispatch<SetStateAction<ClassType>>
) => {
  const { title, startTime, endTime } = classData;
  if (title && startTime && endTime) {
    showNotification({ title: "Add/Remove Class", message: "Class added" })
    setCourseData(prev => ({ ...prev, classes: [...prev.classes, classData] }))
    setClassData({ title: "", startTime: "", endTime: "" })
  }
}


// remove class from the course
export const removeClass = (
  index: number,
  courseData: CourseType,
  setCourseData: Dispatch<SetStateAction<CourseType>>,
) => {
  const courseClassUpdated = courseData.classes.filter((_, ind) => ind !== index);
  showNotification({ title: "Add/Remove Class", message: "Class removed" })
  setCourseData(prev => ({ ...prev, classes: courseClassUpdated }))
}
