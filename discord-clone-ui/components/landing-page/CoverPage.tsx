import React from 'react'
import styles from '@/app/page.module.css'

export default function CoverPage() {
  return (
    <div className={`${styles.main_bg_parent} text-center text-white`}>
      {/* background images  */}
      <div className={styles.left_bg_img}></div>
      <div className={styles.right_bg_img}></div>

      <div>
        <h1 className='text-uppercase fw-bolder mt-5'>imagine a place...</h1>
        <p className='mt-5'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>

        <div className="m-auto my-4">
          <button type="button" className="px-5 py-1 rounded-pill bg-white text-dark">
            Download for Mac
          </button>
          <button type="button" className="px-5 py-1 rounded-pill bg-dark text-white ms-3">
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  )
}
