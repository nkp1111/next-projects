import React from 'react'
import { sidebarData } from '@/constant/sidebarData'
import Image from 'next/image'
import styles from "@/app/dashboard/dashboard.module.css"

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <div className="d-flex flex-column gap-3 align-items-center h-100">
        {sidebarData.map(item => (
          <a href={item.link} key={item.id}
            title={item.title} className={`${styles.link_icon}`}>
            <Image
              src={item.icon}
              alt={item.title}
              width={25}
              height={25}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
