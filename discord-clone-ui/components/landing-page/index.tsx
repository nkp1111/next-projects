import React from 'react'
import Header from './Header'
import CoverPage from './CoverPage'
import styles from '@/app/page.module.css'

export default function LandingPage() {
  return (
    <div className={styles.center_bg_img}>
      <Header />
      <main>
        <CoverPage />
      </main>
    </div>
  )
}
