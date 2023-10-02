"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
const Header = dynamic(() => import("@/components/dashboard/header"))
const RightSidebar = dynamic(() => import("@/components/dashboard/rightSidebar"))
const LeftSidebar = dynamic(() => import("@/components/dashboard/leftSidebar"))
import styles from "@/app/page.module.css"

export default function Dashboard() {
  const [currentWidth, setCurrentWidth] = useState(1000);

  useEffect(() => {
    // Update window width only if window is available (client-side)
    if (typeof window !== 'undefined') {
      setCurrentWidth(window.innerWidth);
    }

    const handleWidth = () => {
      setCurrentWidth(window.innerWidth);
    };

    // Add event listener only if window is available (client-side)
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleWidth);
    }

    return () => {
      // Remove event listener only if window is available (client-side)
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleWidth);
      }
    };
  }, []);
  return (
    <div className={`d-flex flex-column ${styles.min_full_height}`}>
      <Header currentWidth={currentWidth} />
      <div className={`flex-grow-1 ${styles.light_white_background}`}>
        <div className={`container py-3`}>
          <div className="row">
            {currentWidth > 768 && (
              <div className="col-3 p-1">
                <LeftSidebar />
              </div>
            )}

            <div className={`p-1 ${currentWidth > 768 ? "col-6" : "col-12"}`}>
              <div className='w-100 bg-success'>Center</div>
            </div>

            {currentWidth > 768 && (
              <div className="col-3 p-1">
                <RightSidebar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
