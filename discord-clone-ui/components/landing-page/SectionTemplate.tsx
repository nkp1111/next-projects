"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type SectionType = {
  title: string,
  text: string,
  image: string,
  dir?: string,
}


export default function SectionTemplate({ title, text, image, dir = 'rtl' }: SectionType) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWidth);
    handleWidth()
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className={`col col-md-5 col-12 d-flex justify-content-center flex-column ${width > 768 && dir === 'rtl' && 'order-2'}`}>
            <h2 className='text-start fw-bold'>{title}</h2>
            <p>{text}</p>
          </div>
          <div className='col col-md-7 col-12'>
            <Image
              src={image}
              alt="."
              width={900}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
