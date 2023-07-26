import React from 'react'
import Header from './Header'
import CoverPage from './CoverPage'
import SectionTemplate from './SectionTemplate'
import styles from '@/app/page.module.css'
import { sectionData } from '@/constant/sectionData'
import LastSection from './LastSection'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className={styles.center_bg_img}>
      <Header />
      <main>
        <CoverPage />
        {sectionData.slice(0, 3).map((item, ind) => (
          <SectionTemplate
            key={item.id}
            {...item}
            ind={ind}
          />
        ))}
        <LastSection />
        <Footer />
      </main>
    </div>
  )
}
