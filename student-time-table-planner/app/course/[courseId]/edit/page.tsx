"use client";

import { ClassType, CourseType } from '@/types';
import React, { useEffect, useState } from 'react'
import courseDetail from "@/lib/course-class/courseDetail"
import styles from "@/app/utils.module.css"
import Header from '@/components/header';
import Link from 'next/link';
import updateCourse from '@/lib/course-class/updateCourse';
import { useRouter } from 'next/navigation';
import { addClass, removeClass } from '@/lib/course-class/addRemoveCourseClass';
import formatDate from '@/lib/general/formatDate';

export async function generateMetadata({ params: { courseId } }: { params: { courseId: string } }) {
  return {
    title: courseId + "-course"
  }
}

export default function EditCourseDetail(
  { params: { courseId } }: { params: { courseId: string } }
) {
  const router = useRouter();
  const [courseData, setCourseData] = useState<CourseType>({
    title: "",
    classes: [],
    teacher: "",
    _id: ""
  });
  const [classData, setClassData] = useState<ClassType>({
    title: "",
    startTime: "",
    endTime: "",
  });
  useEffect(() => {
    courseDetail(courseId, setCourseData)
  }, [courseId])

  // useEffect(() => {
  //   console.log(courseData);
  // }, [courseData])

  return (
    <main className={styles.height_full}>
      <Header />
      <div className='d-flex flex-column align-items-center'>
        <h1 className='text-center text-dark fw-bold mt-5'>Update Course</h1>

        <Link href="/course" role="button" className='text-success fw-bold p-2 shadow-lg'>Back</Link>

        <form className="bg-white shadow-lg p-4 rounded-2 mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            updateCourse(courseData, router);
          }}>
          <div className="row">
            <fieldset className='col-md-6 col-12'>
              <legend>Add Course Info</legend>
              {/* course title  */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title"
                  value={courseData.title} onChange={(e) => setCourseData((prev) => ({ ...prev, title: e.target.value }))}
                  required />
              </div>
              {/* course teacher  */}
              <div className="mb-3">
                <label htmlFor="teacher" className="form-label">Teacher</label>
                <input type="text" className="form-control" id="teacher"
                  value={courseData.teacher} onChange={(e) => setCourseData((prev) => ({ ...prev, teacher: e.target.value }))}
                  required />
              </div>
              {/* all added classes  */}
              <div className="mb-3">
                {courseData.classes.length > 0 && (
                  <article>
                    <h3 className='fs-5'>All Course Classes</h3>
                    <ul>
                      {courseData.classes.map((classD, ind) => {
                        if (typeof classD === "string") {
                          return <li key={ind} className='mb-2 d-flex align-items-center'>
                            <strong>{classD}</strong>
                            <span className='ms-4 fw-bold btn btn-danger' onClick={() => removeClass(ind, courseData, setCourseData)}>X</span>
                          </li>
                        } else {
                          return <li key={ind} className='mb-2 d-flex align-items-center'>
                            <div>
                              <strong>{classD.title}</strong>
                              <br />
                              <span>{formatDate(classD.startTime)} - </span>
                              <span>{formatDate(classD.endTime)}</span>
                            </div>
                            <div>
                              <span className='ms-4 fw-bold btn btn-danger' onClick={() => removeClass(ind, courseData, setCourseData)}>X</span>
                            </div>
                          </li>
                        }
                      })}
                    </ul>

                  </article>
                )}
              </div>
            </fieldset>

            <fieldset className='col-md-6 col-12'>
              <legend>Add A Class</legend>
              {/* class title */}
              <div className="mb-3">
                <label htmlFor="title2" className="form-label">Title</label>
                <input type="text" className="form-control" id="title2"
                  value={classData.title} onChange={(e) => setClassData((prev) => ({ ...prev, title: e.target.value }))}
                />
              </div>
              {/* class start time  */}
              <div className="mb-3">
                <label htmlFor="starttime" className="form-label">Starting time of Class</label>
                <input type="datetime-local" className="form-control" id="starttime"
                  value={classData.startTime} onChange={(e) => setClassData((prev) => ({ ...prev, startTime: e.target.value }))}
                />
              </div>
              {/* class end time  */}
              <div className="mb-3">
                <label htmlFor="endTime" className="form-label">Ending time of Class</label>
                <input type="datetime-local" className="form-control" id="endTime"
                  value={classData.endTime} onChange={(e) => setClassData((prev) => ({ ...prev, endTime: e.target.value }))}
                />
              </div>
              <button type="button" className='btn btn-success' onClick={() => addClass(classData, setCourseData, setClassData)}>Add Class</button>
            </fieldset>
          </div>
          <hr className='border-2' />
          <button type="submit" className="btn btn-primary px-3 me-auto">Update Course</button>
        </form>
      </div>
    </main>
  )
}
