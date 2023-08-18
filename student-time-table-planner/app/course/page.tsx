"use client";

import { useState, useEffect } from "react";
import { CourseType } from "@/types";
import { SERVER_URL } from "@/constant";
import Header from "@/components/header";
import styles from "@/app/utils.module.css"

export default function Course() {
  const [allCourses, setAllCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const courseUrl = SERVER_URL + "/api/course"
    fetch(courseUrl)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data.success)
          setAllCourses(data.courses);
        } else {
          console.log(data.error)
        }
      })
      .catch(err => console.log('fetching error', err));
  }, []);

  return (
    <main className={styles.height_full}>
      <Header />
      <div className='d-flex flex-column'>
        <h1 className='text-center text-dark fw-bold mt-5'>All Courses</h1>
        <div className="container mt-3">
          <div className="text-end">
            <a href="/api/course/new" role="button" className="btn btn-primary">Add New Course</a>
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
