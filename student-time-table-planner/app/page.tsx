"use client";

import Image from "next/image";
import Link from "next/link";
import frontImage from "@/public/images/stock-image.jpg"
import { useEffect } from "react";
import styles from "@/app/utils.module.css"

export default function Home() {

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/connectdb")
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          console.log(data.success)
        }
        else {
          console.log(data.error);
        }
      }
    })();
  }, []);

  return (
    <main className={`${styles.height_full}`}>
      <div className="container-fluid vh-100">
        <div className={`row h-100 d-flex align-items-center ${styles.md_center}`}>
          <div className="col-md-6 col-12 order-2">
            <h1>Time Table Planner</h1>
            <p className="mt-3 pe-5">
              A single place to plan / draft / manage your classes. Create your timetable and have a look at the calendar and see all your scheduled classes in one place. You can also unenroll in the courses you don&apos;t like.
            </p>
            <div className="btn-holder mt-4">
              <Link role="button" className="btn btn-md btn-danger px-4" href="/register">Register</Link>
              <Link role="button" className="btn btn-md bg-white ms-4 shadow-lg px-4" href="/login">Login</Link>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <Image
              src={frontImage}
              alt="main sitting in front of computer checking screen for data"
              width={640}
              height={354}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
