import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ThemeSectionParam {
  articleData: {
    id: number;
    title: string;
    description: string;
    backgroundImg: StaticImageData;
  }
}

export default function ThemeSectionArticle({ articleData }: ThemeSectionParam) {
  return (
    <article className='xl:w-[30%] w-80 mx-auto flex-col flex cursor-pointer'>
      <h3 className='font-semibold md:text-2xl text-xl order-2 mt-5'>{articleData.title}</h3>
      <div className="order-1">
        <Image
          src={articleData.backgroundImg}
          alt={"."}
          width={400}
          height={400}
          className='w-full h-auto aspect-auto rounded-md'
        />
      </div>
    </article>
  )
}
