import React from 'react'
import Header from './header'
import Main from './main'
import styles from "@/app/page.module.css"

export default function LandingPage() {
  return (
    <div className={`${styles.light_white_background} d-flex flex-column vh-100`}>
      <Header />
      <Main />
    </div>
  )
}
