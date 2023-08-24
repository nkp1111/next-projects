"use client";

import { CourseType } from '@/types';
import React, { useEffect, useState } from 'react'
import courseDetail from "@/lib/course-class/courseDetail"
import styles from "@/app/utils.module.css"
import Header from '@/components/header';
import addCourseToTimeTable from '@/lib/course-class/addCourseToTimeTable';
import { useRouter } from 'next/navigation';
import formatDate from '@/lib/general/formatDate';

export async function generateMetadata({ params: { courseId } }: { params: { courseId: string } }) {
  return {
    title: courseId + "-course"
  }
}

export default function CourseDetail(
  { params: { courseId } }: { params: { courseId: string } }
) {
  const router = useRouter();
  const [detailedCourse, setDetailedCourse] = useState<CourseType>({
    title: "",
    classes: [],
    teacher: "",
    _id: ""
  });
  useEffect(() => {
    courseDetail(courseId, setDetailedCourse)
  }, [courseId])

  return (
    <main className={`${styles.height_full}`}>
      <Header />
      <div className='d-flex flex-column text-center text-dark'>
        <h1 className='fw-bold mt-5'>{detailedCourse?.title}</h1>
        <p ><strong>CourseId: </strong><small>{detailedCourse?._id}</small></p>
        <h2 className='fs-4'><span className='fs-5'>Taught By -</span> {detailedCourse?.teacher}</h2>
        <hr className='w-75 mx-auto' />
        <div className={`shadow-lg my-3 px-2 ${styles.article_body}`}>
          {detailedCourse?.classes.map((classD, ind) => {
            if (typeof classD === 'string') {
              return <article key={ind}>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h3>{classD}</h3>
                  </div>
                  <div className="ms-auto">
                    <button type="button" className="btn btn-success"
                      onClick={() => addCourseToTimeTable(detailedCourse._id as string, classD, router)}>Add this Class</button>
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
                      <p><strong>Class Timings: </strong> {formatDate(classD.startTime)} {classD.endTime && `- ${formatDate(classD.endTime)}` || null}</p>
                    </div>
                    <div className="ms-auto">
                      <button type="button" className="btn btn-success"
                        onClick={() => addCourseToTimeTable(detailedCourse._id as string, classD._id as string, router)}>Add this Class</button>
                    </div>
                  </div>
                </article>
              )
            }
          })}
        </div>
      </div>
    </ main>
  )
}
