"use client";

import { useState, useEffect } from "react";
import { StudentType, ClassType } from "@/types";
import Header from "@/components/header";
import styles from "@/app/utils.module.css"
import Link from "next/link";
import myCourseClass from "@/lib/course-class/myCourseClass";
import removeCourseFromTimeTable from "@/lib/course-class/removeCourseFromTimeTable";

export default function Course() {
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

  const currentStudentClasses: string[] = currentStudentDetail.classes as unknown as string[];
  const isCourseWithClass = (courseClasses: (string | ClassType)[]) => {
    if (!courseClasses || courseClasses.length === 0) return false;
    const courseIds = typeof courseClasses[0] === 'string' ? courseClasses : courseClasses.map((c) => typeof c === "string" ? c : String(c._id));
    return currentStudentClasses.filter(c => courseIds.includes(c)).length > 0
  }

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

                    <div className="ms-auto">
                      <button type="button" className={`btn btn-danger ${isCourseWithClass(course.classes) && 'd-none'}`}
                        onClick={() => removeCourseFromTimeTable(course._id as string, course._id as string, "", setCurrentStudentDetail)}
                      >Remove Course</button>
                    </div>
                  </div>
                  <div className="ms-auto">
                    {course.classes.map((classD, ind) => {
                      if (typeof classD === 'string') {
                        if (currentStudentClasses.includes(classD)) {
                          return <article key={ind}>
                            <div className="d-flex gap-3 align-items-center">
                              <div>
                                <h3>{classD}</h3>
                              </div>
                              <div className="ms-auto">
                                <button type="button" className="btn btn-danger"
                                  onClick={() => removeCourseFromTimeTable(course._id as string, "", classD, setCurrentStudentDetail)}
                                >Remove</button>
                              </div>
                            </div>
                          </article>
                        }

                      } else if (currentStudentClasses.includes(classD._id as string)) {
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
                                  onClick={() => removeCourseFromTimeTable(course._id as string, "", classD._id as string, setCurrentStudentDetail)}
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


export const revalidate = 0;