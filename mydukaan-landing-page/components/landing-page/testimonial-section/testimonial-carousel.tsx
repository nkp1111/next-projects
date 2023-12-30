"use client";

import React, { useEffect, useState } from 'react'
import TestimonialArticle from './testimonial-article';
import { testimonialArticleData } from './testimonial-article-data';

const getCarouselItems = () => [
  {
    position: 0,
    el: document.getElementById('carousel-item-1') as HTMLElement,
  },
  {
    position: 1,
    el: document.getElementById('carousel-item-2') as HTMLElement,
  },
  {
    position: 2,
    el: document.getElementById('carousel-item-3') as HTMLElement,
  },
];


export default function TestimonialCarousel() {
  const [currentPos, setCurrentPos] = useState(0);
  // const [stopCarousel, setStopCarousel] = useState(false);

  useEffect(() => {
    const items = getCarouselItems();
    const prevButton = document.getElementById('data-carousel-prev') as HTMLElement;
    const nextButton = document.getElementById('data-carousel-next') as HTMLElement;
    const showNext = (lastPos: number) => {
      setCurrentPos((pos) => pos < lastPos ? pos + 1 : 0)
    }
    const showPrev = (lastPos: number) => {
      setCurrentPos((pos) => pos !== 0 ? pos - 1 : lastPos)
    }

    prevButton.addEventListener('click', () => showPrev(items.length - 1));
    nextButton.addEventListener('click', () => showNext(items.length - 1));
    return () => {
      prevButton.removeEventListener('click', () => showPrev(items.length - 1));
      nextButton.removeEventListener('click', () => showNext(items.length - 1));
    }
  }, []);


  // useEffect(() => {
  //   const carouselChangingTime = 3000;
  //   const items = getCarouselItems();
  //   let interval = setInterval(() => {
  //     if (!stopCarousel) {
  //       setCurrentPos((pos) => pos < items.length - 1 ? pos + 1 : 0)
  //     }
  //   }, carouselChangingTime);

  //   return () => clearInterval(interval);
  // }, [stopCarousel]);


  useEffect(() => {
    const items = getCarouselItems();
    const showHideCarouselItem = () => {
      items.forEach(item => {
        item.el.classList.remove("flex");
        item.el.classList.add("hidden");

        if (item.position === currentPos) {
          item.el.classList.add("flex");
          item.el.classList.remove("hidden");
        }
      })
    }
    showHideCarouselItem();
  }, [currentPos]);

  return (
    <div id="carousel-example" className="relative w-full">
      {/* <!-- Carousel wrapper --> */}
      <div
        className="relative rounded-lg pb-5"
      >
        {/* <!-- Item 1 --> */}
        <div id="carousel-item-1" className="hidden duration-700 ease-in-out px-12">
          <TestimonialArticle articleData={testimonialArticleData[0]} />
          <TestimonialArticle articleData={testimonialArticleData[1]} />
        </div>
        {/* <!-- Item 2 --> */}
        <div id="carousel-item-2" className="hidden duration-700 ease-in-out px-12 ">
          <TestimonialArticle articleData={testimonialArticleData[2]} />
          <TestimonialArticle articleData={testimonialArticleData[3]} />
        </div>
        {/* <!-- Item 3 --> */}
        <div id="carousel-item-3" className="hidden duration-700 ease-in-out px-12 ">
          <TestimonialArticle articleData={testimonialArticleData[3]} />
          <TestimonialArticle articleData={testimonialArticleData[4]} />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div
        className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          id="carousel-indicator-1"
          type="button"
          className={`h-3 w-3 rounded-full bg-gray-500 duration-300 linear-ease transition-all ${currentPos === 0 && "bg-gray-900"}`}
          aria-current="true"
          aria-label="Slide 1"
          onClick={() => {
            setCurrentPos(0)
          }}
        ></button>
        <button
          id="carousel-indicator-2"
          type="button"
          className={`h-3 w-3 rounded-full bg-gray-500 duration-300 linear-ease transition-all ${currentPos === 1 && "bg-gray-900"}`}
          aria-current="false"
          aria-label="Slide 2"
          onClick={() => {
            setCurrentPos(1)
          }}
        ></button>
        <button
          id="carousel-indicator-3"
          type="button"
          className={`h-3 w-3 rounded-full bg-gray-500 duration-300 linear-ease transition-all ${currentPos === 2 && "bg-gray-900"}`}
          aria-current="false"
          aria-label="Slide 3"
          onClick={() => {
            setCurrentPos(2)
          }}
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        id="data-carousel-next"
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
      <button
        id="data-carousel-prev"
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
    </div>
  )
}
