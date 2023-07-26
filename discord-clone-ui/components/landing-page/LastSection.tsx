import Image from 'next/image'
import React from 'react'
import { sectionData } from '@/constant/sectionData'
import downloadWhiteIcon from "@/public/assets/download_white_icon.svg"
import styles from "@/app/page.module.css"

export default function LastSection() {
  const { title, text, image } = sectionData[sectionData.length - 1];

  return (
    <section className={`dark ${styles.last_section}`}>
      <div className="container">
        <div className="row">
          <div className={`col col-12 text-center`}>
            <h2 className='fw-bold text-uppercase'>{title}</h2>
            <p>{text}</p>
          </div>
          <div className='col col-12'>
            <Image
              src={image}
              alt="."
              width={900}
              height={400}
              className='d-block m-auto last-section-image'
            />
          </div>
          <div className={`col col-12 text-center`}>
            <h3 className='fw-bold'>Ready to start your journey?</h3>
            <button type='button' className=' rounded-pill px-5 py-2 text-white mt-3'>
              <Image
                src={downloadWhiteIcon}
                alt="."
                width={15}
                height={15}
                className='me-2'
              />
              Download for Mac
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
