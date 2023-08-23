"use client";

import { useState, useEffect } from "react";
import { CourseType, ScheduleType, StudentType } from "@/types";
import Header from "@/components/header";
import styles from "@/app/utils.module.css"
import getAllCourses from "@/lib/course-class/allCourses";
import Link from "next/link";
import removeCourse from "@/lib/course-class/removeCourse";
import addCourseToTimeTable from "@/lib/course-class/addCourseToTimeTable";
import { useRouter } from "next/navigation";
import myCourseClass from "@/lib/course-class/myCourseClass";

export default function Course() {
  const router = useRouter();
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

  useEffect(() => {
    myCourseClass(
      setCurrentStudentDetail,
      "true",
    )
  }, []);

  useEffect(() => { console.log(currentStudentDetail) }, [currentStudentDetail])

  return (
    <main className={styles.height_full}>
      <Header />
      <div className='d-flex flex-column'>
        <h1 className='text-center text-dark fw-bold mt-5'>My Courses</h1>
        <div className="container mb-5">
          <ul className="navbar-nav">
            {currentStudentDetail.courses.map(course => (
              <li key={course._id} className="shadow-lg px-3 py-2 mt-5 border-2 rounded">
                <div className="d-flex gap-3 align-items-center flex-column text-center">
                  <div>
                    <div className="fw-bold">
                      <Link href={`/course/${course._id}`} className="fs-3">{course.title}</Link>
                    </div>
                    <div><span className="fw-semibold">CourseId: </span><small>{course._id}</small></div>
                    <div><span className="fw-semibold">Taught By: </span><span className="fs-5">{course.teacher}</span></div>
                  </div>
                  <div className="ms-auto">
                    {course.classes.map((classD, ind) => {
                      if (typeof classD === 'string') {
                        return <article key={ind}>
                          <div className="d-flex gap-3 align-items-center">
                            <div>
                              <h3>{classD}</h3>
                            </div>
                            <div className="ms-auto">
                              <button type="button" className="btn btn-danger"
                              // onClick={() => addCourseToTimeTable(detailedCourse._id as string, classD, router)}
                              >Remove</button>
                            </div>
                          </div>
                        </article>
                      } else {
                        return (
                          <article key={ind} className="shadow-lg px-3 py-2 mt-3 border-2 rounded">
                            <div className="d-flex gap-3 align-items-center">
                              <div className='text-start'>
                                <h3>{classD.title}</h3>
                                <p className='mt-0'><strong>Class Id: </strong><small>{classD._id}</small></p>
                                <p><strong>Class Timings: </strong> {classD.startTime} {classD.endTime && `- ${classD.endTime}` || null}</p>
                              </div>
                              <div className="ms-auto">
                                <button type="button" className="btn btn-danger"
                                // onClick={() => addCourseToTimeTable(detailedCourse._id as string, classD._id as string, router)}
                                >Remove</button>
                              </div>
                            </div>
                          </article>
                        )
                      }
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ main>
  )
}
