import React from 'react'
import healthXpImage from "@/public/assets/brands/healthxp.svg"
import vuImage from "@/public/assets/brands/vu.svg"
import govoImage from "@/public/assets/brands/govo.svg";
import styleUpImage from "@/public/assets/brands/styleup.svg"
import wowImage from "@/public/assets/brands/wow.svg"
import lemonadeImage from "@/public/assets/brands/lemonade.svg"
import uppercaseImage from "@/public/assets/brands/uppercase.svg"
import nutketsImage from "@/public/assets/brands/nutkets.svg"
import vectorImage from "@/public/assets/brands/vector.svg"
import trukeImage from "@/public/assets/brands/truke.svg"
import Image from 'next/image'


const imageArr = [healthXpImage, vuImage, govoImage, styleUpImage, wowImage, lemonadeImage, uppercaseImage, nutketsImage, vectorImage, trukeImage];

export default function MovingBrand() {
  return (
    <section className='bg-stone-900 flex space-x-32 overflow-hidden group items-center'>
      <div className="flex items-center animate-loop-scroll space-x-32 group-hover:paused w-auto">
        {imageArr.map((item, ind) => (
          <div key={ind} className='w-48 h-48 flex items-center'>
            <Image
              src={item}
              alt=""
              width={80}
              height={40}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
      <div className="flex items-center animate-loop-scroll space-x-32 group-hover:paused w-auto"
        aria-hidden={true}>
        {imageArr.map((item, ind) => (
          <div key={ind} className='w-48 h-48 flex items-center'>
            <Image
              src={item}
              alt=""
              width={80}
              height={40}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>

    </section>
  )
}
