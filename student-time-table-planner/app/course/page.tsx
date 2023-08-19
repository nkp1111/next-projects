"use client";

import { useState, useEffect } from "react";
import { CourseType } from "@/types";
import Header from "@/components/header";
import styles from "@/app/utils.module.css"
import getAllCourses from "@/lib/course-class/allCourses";

export default function Course() {
  const [allCourses, setAllCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    getAllCourses(setAllCourses)
  }, []);

  return (
    <main className={styles.height_full}>
      <Header />
      <div className='d-flex flex-column'>
        <h1 className='text-center text-dark fw-bold mt-5'>All Courses</h1>
        <div className="container mt-3">
          <div className="text-end">
            <a href="/course/new" role="button" className="btn btn-primary">Add New Course</a>
          </div>
          <div>
            {allCourses.map(course => (
              <div key={course._id}>
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ main>
  )
}
