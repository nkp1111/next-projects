import Image from 'next/image';
import React from 'react'

interface PluginArticleParams {
  articleData: {
    id: number;
    title: string;
    icon: any;
    classes: string;
  }
}

export default function PluginSectionArticle({ articleData }: PluginArticleParams) {
  return (
    <article className={`${articleData.classes}`}>
      <h3 className='font-semibold xl:text-xl text-lg mb-6 order-2 hidden' aria-label={articleData.title}>{articleData.title}</h3>
      <Image
        src={articleData.icon}
        alt={"."}
        width={80}
        height={80}
        className={`w-20 rounded-md aspect-auto order-1 mx-auto`}
        aria-label={articleData.title}
      />
    </article>
  )
}
