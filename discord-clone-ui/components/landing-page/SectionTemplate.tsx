"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type SectionType = {
  title: string,
  text: string,
  image: string,
  ind: number,
}


export default function SectionTemplate({ title, text, image, ind }: SectionType) {
  const [width, setWidth] = useState(0);
  const dir = ind % 2 === 0 ? "rtl" : "ltr"

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWidth);
    handleWidth()
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <section className={`${ind % 2 !== 0 ? 'dark' : ''}`}>
      <div className="container">
        <div className="row">
          <div className={`col col-md-5 col-12 d-flex justify-content-center flex-column 
          ${width > 768 && dir === 'rtl' && 'order-2'}`}>
            <h2 className='text-start fw-bold'>{title}</h2>
            <p>{text}</p>
          </div>
          <div className='col col-md-7 col-12'>
            <Image
              src={image}
              alt="."
              width={900}
              height={width > 600 ? 400 : 200}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
