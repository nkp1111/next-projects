import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface TestimonialArticleParams {
  articleData: {
    id: number;
    title: string;
    description: string;
    logo: StaticImageData;
    avatar: any;
    name: string;
    position: string;
  }
}

export default function TestimonialArticle({ articleData }: TestimonialArticleParams) {
  return (
    <article className='bg-white rounded-md py-6 px-5 mx-auto flex-col inline-flex flex-1 sm:h-[480px] h-auto'>
      <div className="flex flex-col order-2 flex-1 justify-between">
        <div>
          <h3 className='font-semibold xl:text-xl text-lg mb-1'>
            <span className='text-3xl font-bold'>&rdquo;</span>
            <span>{articleData.title}</span>
            <span className='text-3xl font-bold'>&rdquo;</span>
          </h3>
          <p className='text-gray-500 text-lg'>{articleData.description}</p>
        </div>
        <div
          className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <Image
            src={articleData.avatar}
            alt={articleData.name + "avatar"}
            width={20}
            height={20}
            className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-start justify-start flex-col">
              <h5
                className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {articleData.name}
              </h5>
              <p className='text-gray-500'>{articleData.position}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex order-1 py-10 h-28 items-center">
        <Image
          src={articleData.logo}
          alt={"."}
          width={100}
          height={50}
          className={`aspect-auto max-h-20 ${articleData.id === 4 && "w-40"} ${articleData.id === 5 && "w-12 h-12"}`}
        />
      </div>
    </article>
  )
}
