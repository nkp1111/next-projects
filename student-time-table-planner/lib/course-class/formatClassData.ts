import { ClassType, ScheduleType } from "@/types";
import { Dispatch, SetStateAction } from "react";


// format class data to react-big-calendar library event data
export default function formatClassData(
  classData: ClassType[],
  setMyClassSchedule: Dispatch<SetStateAction<ScheduleType[]>>
) {
  const formattedClass: ScheduleType[] = classData.map((classD, ind) => {
    const formattedData = {
      id: classD._id || ind.toString(),
      title: classD.title,
      start: classD.startTime ? new Date(classD.startTime)
        : (classD.time && new Date(classD.time)) || new Date(),
      end: classD.endTime
        ? new Date(classD.endTime)
        : (classD.time && new Date(new Date(classD.time).getTime() + randomEndTime())) || new Date()
    }
    return formattedData;
  })
  setMyClassSchedule(formattedClass)
}


export function randomEndTime(): number {
  return Math.floor(Math.random() * 1000 * 60 * 60 * 24) + 1000 * 60 * 60 * 6
} 
