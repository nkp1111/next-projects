"use client";

import Image from "next/image";
import promoImage from "@/public/assets/Dashboard-Promo-Image.jpg"
import { MdOutlineError } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { dashboardNews } from "./dashboardData";

export default function LeftSidebar() {
  return (
    <div className="w-100">

      <div className="card shadow-sm rounded-2">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="m-0 text-dark">
              <strong>LinkedIn News</strong>
            </p>
            <MdOutlineError className="text-dark fs-4" />
          </div>

          <ul className="p-0">
            {dashboardNews.map(news => (
              <li className="d-flex" key={news.id}>
                <div className="me-2 text-dark">
                  <GoDotFill />
                </div>
                <div className="d-flex flex-column">
                  <strong>{news.title.slice(0, 42) + "..."}</strong>
                  <span className="text-secondary">{news.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card shadow-sm rounded-2 mt-3">
        <div className="card-body">
          <Image
            src={promoImage}
            alt="man looking forward to bright future smilingly..."
            width={500}
            height={250}
          />
        </div>
      </div>
    </div>
  )
}
