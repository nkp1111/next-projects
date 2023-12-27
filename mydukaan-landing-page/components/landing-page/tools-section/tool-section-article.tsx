import Image from 'next/image';
import React from 'react'

interface SectionArticleParams {
  articleData: {
    id: number;
    title: string;
    description: string;
    backgroundImg: any;
  }
}

export default function ToolSectionArticle({ articleData }: SectionArticleParams) {
  return (
    <article className='bg-white rounded-md py-6 px-5 xl:w-[30%] w-80 mx-auto text-center flex-col flex'>
      <h3 className='font-semibold xl:text-xl text-lg mb-6 order-2'>{articleData.title}</h3>
      <p className='order-3 text-gray-500 text-lg'>{articleData.description}</p>
      <Image
        src={articleData.backgroundImg}
        alt={"."}
        width={80}
        height={80}
        className='w-16 aspect-auto order-1 mx-auto mb-3'
      />
    </article>
  )
}
