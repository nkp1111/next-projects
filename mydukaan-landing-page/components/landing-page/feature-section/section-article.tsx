import Image from 'next/image';
import React from 'react'

interface SectionArticleProps {
  articleData: {
    id: number;
    title: string;
    features: string[];
    color: string;
    backgroundImg: any;
  }
}

export default function SectionArticle({ articleData }: SectionArticleProps) {
  return (
    <article className={`flex flex-col ${articleData.id !== 2 ? "md:flex-row-reverse md:flex-end" : "md:flex-row"} gap-16 mt-16`}>
      <div className='flex-1 rounded-md flex justify-center flex-col'>
        <h3 className='font-bold xl:text-3xl sm:text-2xl text-xl mb-6'>{articleData.title}</h3>
        <ul>
          {articleData.features.map((feature, ind) => (
            <li key={ind} className='text-lg mb-3 flex items-start justify-start gap-5'>
              <span className='text-red-500 mt-1'><StarIcon fillColor={articleData.color || "#000"} /></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`flex-1 rounded-md flex items-center`}>
        <Image
          src={articleData.backgroundImg}
          alt={articleData.title}
          width={500}
          height={500}
          className='aspect-auto w-full'
        />
      </div>
    </article>
  )
}


export function StarIcon({ fillColor }: { fillColor: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.905 4.0038C7.84618 3.68076 7.80187 3.36138 7.77324 3.04196C7.73011 2.56283 7.75677 2.08004 7.74148 1.60092C7.73481 1.39765 7.70854 0.86772 7.71912 0.791495C7.8152 0.127253 8.39439 0.0256078 8.56379 0.00745914C8.64575 -0.00343008 9.48728 -0.0905048 9.66884 0.773373C9.89158 1.82963 9.96295 2.89313 9.88413 3.93486C10.068 4.82052 10.3826 5.70252 10.7978 6.50107C12.4503 9.67709 15.5992 9.98562 19.0108 9.95658C19.5355 9.94932 19.9712 10.3304 19.9986 10.8132C20.0261 11.2996 19.6355 11.7206 19.1132 11.7642C17.2062 11.9348 13.8228 13.3504 12.653 14.8241C12.4083 15.1326 12.266 15.8767 12.0778 16.6063C11.815 17.619 11.5025 18.6208 11.1523 19.0418C11.0998 19.1072 10.461 19.7751 10.2704 19.8731C9.81237 20.1054 9.44573 19.971 9.2375 19.8476C9.02927 19.7242 8.79359 19.481 8.69948 19.0781C8.60105 18.6571 8.68418 17.7932 8.66889 17.6081C8.61321 16.9366 8.46813 15.619 8.17206 14.4865C8.01246 13.8767 7.84226 13.3141 7.5607 13.0346C6.51839 12.0001 4.85179 12.1526 3.44832 12.3232C3.28715 12.3413 3.12598 12.3631 2.96521 12.3813C2.39386 12.5373 1.7872 12.6535 1.14605 12.7224C0.177852 12.8277 0.0186539 12.0038 0.0100268 11.9493C-0.00801166 11.8295 -0.0750748 11.2125 0.6547 10.9657C0.734304 10.9403 1.32174 10.8205 1.548 10.7733C1.86328 10.7079 2.18209 10.6571 2.50208 10.61C5.80743 9.65896 7.60266 6.98745 7.905 4.0038ZM9.03947 7.30327C10.2873 9.69164 12.1809 10.8459 14.4255 11.3686H14.4251C13.0236 12.0473 11.7488 12.8967 11.0731 13.7497C10.8166 14.0727 10.5814 14.7224 10.3692 15.452C10.2543 14.7733 10.099 14.0509 9.89395 13.4339C9.66062 12.7297 9.3465 12.1453 8.99593 11.7969C8.31909 11.1254 7.46971 10.7515 6.55642 10.5664C7.64971 9.66986 8.4787 8.5519 9.03947 7.30327Z" fill={fillColor} />
    </svg>
  )
}
