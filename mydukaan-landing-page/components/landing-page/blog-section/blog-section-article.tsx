import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface BlogArticleParams {
  articleData: {
    id: number;
    title: string;
    image: StaticImageData;
    place: string;
  }
}

export default function BlogSectionArticle({ articleData }: BlogArticleParams) {
  return (
    <article className="md:max-w-md w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col-reverse">
      <div className="p-5 flex flex-col-reverse">
        <a href="#">
          <h3 className='font-semibold xl:text-xl text-lg mb-6  tracking-tight'>{articleData.title}</h3>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 uppercase">{articleData.place}</p>
      </div>
      <div className='cursor-pointer hover:bg-white hover:opacity-75 transition-opacity duration-300 ease-linear'>
        <Image
          src={articleData.image}
          alt={"."}
          width={400}
          height={300}
          className="rounded-t-lg w-full object-contain"
        />
      </div>

    </article>
  )
}
