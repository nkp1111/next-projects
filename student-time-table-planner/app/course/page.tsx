"use client";

import { useState, useEffect } from "react";
import { CourseType } from "@/types";
import Header from "@/components/header";
import styles from "@/app/utils.module.css"
import getAllCourses from "@/lib/course-class/allCourses";
import Link from "next/link";
import removeCourse from "@/lib/course-class/removeCourse";
import { useRouter } from "next/navigation";

export default function Course() {
  const router = useRouter();
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
            <a href="/course/new" role="button" className="btn btn-primary">Create New Course</a>
          </div>

          <ul className="navbar-nav">
            {allCourses.map(course => (
              <li key={course._id} className="shadow-lg px-3 py-2 mt-3 border-2 rounded">
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <div><span className="fw-semibold">CourseId: </span><small>{course._id}</small></div>
                    <div>
                      <Link href={`/course/${course._id}`} className="fs-5">{course.title}</Link>
                      <span className="ms-2 fw-semibold"> By {course.teacher}</span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <button type="button" className="btn btn-danger ms-1"
                      onClick={() => removeCourse(course._id as string, router)}>Delete this Course</button>
                    <button type="button" className="btn btn-secondary ms-1">Update this course</button>
                    <button type="button" className="btn btn-success ms-1">Add this Course</button>
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
