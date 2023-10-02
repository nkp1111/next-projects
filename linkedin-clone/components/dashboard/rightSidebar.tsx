"use client";

import Image from "next/image";
import styles from "@/app/page.module.css"
import { BsFillBookmarkFill, BsTicketPerforated } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function RightSidebar() {
  return (
    <div className="w-100">

      <div className="card shadow-sm rounded-2">
        <div className={`card-header text-center py-2 ${styles.secondary_linear_background}`}>
          <Image
            src="https://gravatar.com/avatar/"
            alt="avatar"
            width="50"
            height="50"
            className="rounded-circle"
          />
        </div>
        <div className="card-body bg-white">
          <div className="mt-3 mb-4 text-center">
            <h3 className="m-0">Neeraj P</h3>
            <p className="m-0">neerajp4321@gmail.com</p>
          </div>
          <div className="mb-4">
            <div className="d-flex justify-content-between flex-wrap">
              <strong>Who viewed your profile</strong>
              <span className="text-primary">321</span>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <strong>Views of your post</strong>
              <span className="text-primary">1,321</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-secondary m-0">Access exclusive tools & insights</p>
            <div className="d-flex">
              <BsTicketPerforated className="bg-warning fs-3 me-2 fw-normal text-secondary" />
              <p><strong>Try Premium for free</strong></p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <BsFillBookmarkFill className="text-dark me-2 fs-5" />
            <p className="m-0"><strong>My items</strong></p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm rounded-2 mt-3">
        <div className="card-body">
          <p className="text-primary"><strong>Groups</strong></p>
          <p className="d-flex justify-content-between">
            <strong className="text-primary">Events</strong>
            <AiOutlinePlus className="fw-bold fs-5" />
          </p>
          <p className="text-primary"><strong>Followed Hashtags</strong></p>

          <p className="text-secondary text-center fw-semibold mt-3">Discover More</p>
        </div>

      </div>
    </div>
  )
}
