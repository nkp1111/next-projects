"use client";

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import styles from "@/app/utils.module.css"
import "react-big-calendar/lib/css/react-big-calendar.css"
import Header from '@/components/header';
import { useEffect, useState } from 'react';
import myCourseClass from '@/lib/course-class/myCourseClass';
import { ClassType, CourseType, ScheduleType, StudentType } from '@/types';
import formatClassData from '@/lib/course-class/formatClassData';


const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const myEventsList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2023, 7, 0),
    end: new Date(2023, 7, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2023, 7, 7),
    end: new Date(2023, 7, 10),
  },
]

export default function TimeTable() {
  const [currentStudentDetail, setCurrentStudentDetail] = useState<StudentType>({
    _id: "",
    name: "",
    email: "",
    password: "",
    photo: "",
    bio: "",
    courses: [],
    classes: [],
  });
  const [myClassSchedule, setMyClassSchedule] = useState<ScheduleType[]>([]);

  useEffect(() => {
    myCourseClass(
      setCurrentStudentDetail
    )
  }, []);

  useEffect(() => {
    if (currentStudentDetail.classes.length > 0) {
      formatClassData(
        currentStudentDetail.classes,
        setMyClassSchedule,
      )
    }
  }, [currentStudentDetail])

  // useEffect(() => { console.log(myClassSchedule) }, [myClassSchedule])

  return (
    <main className={styles.height_full}>
      <Header />
      <div className='d-flex flex-column'>
        <h1 className='text-center text-dark fw-bold mt-5'>My TimeTable</h1>
        <div className="container mt-3">
          <Calendar
            localizer={localizer}
            events={myClassSchedule}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
          />
        </div>
      </div>
    </ main>
  )
}
