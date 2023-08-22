"use client";

import Header from '@/components/header'
import styles from "@/app/utils.module.css"
import Link from 'next/link';
import { CourseType, ClassType } from '@/types';
import { useState } from 'react';
import addNewCourse from '@/lib/course-class/addCourse';
import { useRouter } from 'next/navigation';
import { addClass, removeClass } from '@/lib/course-class/addRemoveCourseClass';

export default function AddNewCourse() {
  const router = useRouter();
  const [courseData, setCourseData] = useState<CourseType>({
    title: "",
    classes: [],
    teacher: "",
  });
  const [classData, setClassData] = useState<ClassType>({
    title: "",
    startTime: "",
    endTime: "",
  });


  return (
    <main className={styles.height_full}>
      <Header />
      <div className='d-flex flex-column align-items-center'>
        <h1 className='text-center text-dark fw-bold mt-5'>Add New Course</h1>

        <Link href="/course" role="button" className='text-success fw-bold p-2 shadow-lg'>Back</Link>

        <form className="bg-white shadow-lg p-4 rounded-2 mt-2"
          onSubmit={(e) => {
            addNewCourse(e, courseData, router)
            setCourseData({ title: "", classes: [], teacher: "" });
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
                    <h3 className='fs-6'>All Course Classes</h3>
                    <ul>
                      {courseData.classes.map((classD, ind) => {
                        if (typeof classD === "string") {
                          return <li key={ind} className='mb-2'>
                            <span>{classD}</span>
                            <span className='ms-4 fw-bold btn btn-danger' onClick={() => removeClass(ind, courseData, setCourseData)}>X</span>
                          </li>
                        } else {
                          return <li key={ind} className='mb-2'>
                            <span>{classD.title} - </span>
                            <span>{classD.startTime?.toString() || classD?.time || ""}</span>
                            <span>{classD.endTime?.toString()}</span>
                            <span className='ms-4 fw-bold btn btn-danger' onClick={() => removeClass(ind, courseData, setCourseData)}>X</span>
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
          <button type="submit" className="btn btn-primary px-3 me-auto">Add New Course</button>
        </form>
      </div>
    </main>
  )
}
