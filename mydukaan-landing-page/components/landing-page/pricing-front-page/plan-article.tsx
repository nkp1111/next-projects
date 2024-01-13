import Image from 'next/image';
import React from 'react'

interface PlanArticleParams {
  articleData: {
    id: number;
    title: string;
    description: string;
    pricing: {
      monthly: number;
      yearly: number;
    };
    features: string[];
    plugins: {
      id: number;
      title?: string;
      image: string;
      height: string;
      width: string;
    }[];
    plugin_worth: number;
    most_popular: boolean;
  };

  duration: "yearly" | "monthly";
}

function formatNumber(number: number) {
  let str = number.toString();
  let frontStr = str.slice(0, str.length - 3);
  let lastStr = str.slice(str.length - 3,);
  let ans = "";
  let st = 0
  for (let i = frontStr.length - 1; i >= 0; i--) {
    ans += frontStr[st];
    st++;
    if (i % 2 === 0) {
      ans += ",";
    }
  }
  ans = Array(ans).reverse().toString();
  return ans + lastStr;
}


export default function PlanArticle({ articleData, duration }: PlanArticleParams) {
  const planPrice = articleData.pricing[duration];
  return (
    <article className={`border rounded-md lg:w-[23%] flex flex-col md:w-[47%] w-full relative lg:mb-0 md:mb-10 ${articleData.most_popular ? "border-orange-400 rounded-t-none mt-8 md:mt-0" : "border-gray-300"}`}>
      {articleData.most_popular &&
        <div className="absolute bottom-full h-8 -left-[1px] -right-[1px] bg-orange-400 text-center uppercase text-sm flex items-center justify-center font-medium rounded-t-md">
          🔥 most popular
        </div>
      }

      <div className='p-6'>
        <div className="flex flex-col h-20 lg:h-28">
          <h3 className='text-2xl font-medium'>{articleData.title}</h3>
          <p className='mt-2 text-gray-700'>{articleData.description}</p>
        </div>
        <div className='font-bold text-4xl'>
          <span>₹</span>
          <span className='transition-all duration-300 ease-linear'>{formatNumber(planPrice)}</span>
          <span className={`${planPrice ? "inline text-lg text-gray-700 font-medium transition-all duration-300 ease-linear" : "hidden"}`}>/{duration === "monthly" ? "month" : "year"}</span>
        </div>
        <div className='my-5'>
          <button type="button"
            className={`w-full border py-3 rounded-md cursor-pointer transition-all duration-300 ease-linear font-medium text-lg ${articleData.most_popular ? "bg-sky-700 border-gray-50 hover:bg-sky-800 text-white" : "bg-white hover:bg-sky-100 border-sky-700 text-sky-700"}`}
          >Get started</button>
        </div>

        <div className='h-60'>
          <h4 className='font-medium'>What&apos;s included:</h4>
          <ul className='list-disc ps-3'>
            {articleData.features.map((feature, ind) => (
              <li key={ind} className='mt-2'>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <a href="#" className='underline'>Show more features &#10140;</a>
        </div>
      </div>

      <div className={`${articleData.plugins.length > 50 ? "bg-purple-800" : "bg-blue-800"}
      text-white px-1 py-2 mt-4 text-sm text-center`}>
        <span>&#9733;</span>
        <span>{articleData.plugins.length} Plugins worth ₹{articleData.plugin_worth} included</span>
      </div>

    </article>
  )
}
