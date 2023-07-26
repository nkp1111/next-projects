import React from 'react'
import Header from './Header'
import CoverPage from './CoverPage'
import SectionTemplate from './SectionTemplate'
import styles from '@/app/page.module.css'
import { sectionData } from '@/constant/sectionData'

export default function LandingPage() {
  return (
    <div className={styles.center_bg_img}>
      <Header />
      <main>
        <CoverPage />
        {sectionData.map((item, ind) => (
          <SectionTemplate
            key={item.id}
            {...item}
            dir={ind % 2 === 0 ? "rtl" : "ltr"}
          />
        ))}
      </main>
    </div>
  )
}
