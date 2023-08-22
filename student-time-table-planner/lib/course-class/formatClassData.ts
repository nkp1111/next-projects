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
      start: new Date(classD.startTime),
      end: new Date(classD.endTime),
    }
    return formattedData;
  })
  setMyClassSchedule(formattedClass)
}


export function randomEndTime(): number {
  return Math.floor(Math.random() * 1000 * 60 * 60 * 24) + 1000 * 60 * 60 * 6
} 
