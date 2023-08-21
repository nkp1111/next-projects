import { ClassType, CourseType } from "@/types";
import { Dispatch, SetStateAction } from "react";


// add class to the course
export const addClass = (
  classData: ClassType,
  setCourseData: Dispatch<SetStateAction<CourseType>>,
  setClassData: Dispatch<SetStateAction<ClassType>>
) => {
  const { title, time } = classData;
  if (title && time) {
    setCourseData(prev => ({ ...prev, classes: [...prev.classes, classData] }))
    setClassData({ title: "", time: "" })
  }
}


// remove class from the course
export const removeClass = (
  index: number,
  courseData: CourseType,
  setCourseData: Dispatch<SetStateAction<CourseType>>,
) => {
  const courseClassUpdated = courseData.classes.filter((_, ind) => ind !== index);
  setCourseData(prev => ({ ...prev, classes: courseClassUpdated }))
}
