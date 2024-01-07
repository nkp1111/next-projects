"use client";

import React, { useEffect, useState } from 'react'
import TestimonialArticle from './testimonial-article';
import { testimonialArticleData } from './testimonial-article-data';

const getCarouselItems = () => {
  if (window.innerWidth >= 768) {
    return [
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
  } else {
    return [
      {
        position: 0,
        el: document.getElementById('carousel-item-6') as HTMLElement,
      },
      {
        position: 1,
        el: document.getElementById('carousel-item-7') as HTMLElement,
      },
      {
        position: 2,
        el: document.getElementById('carousel-item-8') as HTMLElement,
      },
      {
        position: 3,
        el: document.getElementById('carousel-item-9') as HTMLElement,
      },
      {
        position: 4,
        el: document.getElementById('carousel-item-10') as HTMLElement,
      },
    ];
  }
}



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

  useEffect(() => {
    const sliderIndicatorHolder = document.getElementById("slider-indicators") as HTMLElement;
    const items = getCarouselItems();
    const addIndicators = (items: any) => {
      sliderIndicatorHolder.innerHTML = "";
      items.forEach((_: any, index: number) => {
        const indicator = document.createElement("button");
        indicator.setAttribute("id", `carousel-indicator-${index}`);
        indicator.setAttribute("type", "button");
        indicator.setAttribute("class", `h-3 w-3 rounded-full bg-gray-500 duration-300 linear-ease transition-all`);
        indicator.setAttribute("aria-current", `${index === currentPos}`);
        indicator.setAttribute("aria-label", `Slide-${index + 1}`)
        indicator.addEventListener("click", () => setCurrentPos(index))
        sliderIndicatorHolder?.appendChild(indicator);
      })
    }
    window.addEventListener("resize", () => {
      addIndicators(items)
    });
    addIndicators(items);
    return () => {
      window.removeEventListener("resize", () => addIndicators(items))
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
    const sliderIndicatorHolder = document.getElementById("slider-indicators") as HTMLElement;
    const indicators: HTMLCollection = sliderIndicatorHolder.children;

    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("bg-gray-900")
      if (i === currentPos) indicators[i].classList.add("bg-gray-900")
    }
  }, [currentPos]);

  return (
    <div id="carousel-example" className="relative w-full">
      {/* <!-- Carousel wrapper --> */}
      <div
        className="relative rounded-lg pb-5"
      >
        <div className='md:block hidden'>
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
        <div className='md:hidden block'>
          {/* <!-- Item --> */}
          {testimonialArticleData.map((item) => (
            <div key={item.id} id={`carousel-item-${item.id + 5}`} className="hidden duration-700 ease-in-out px-12">
              <TestimonialArticle articleData={item} />
            </div>
          ))}
        </div>


      </div>
      {/* <!-- Slider indicators --> */}
      <div
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
        id="slider-indicators"
      >
        {/* <button
          id="carousel-indicator-1"
          type="button"
          className={`h-3 w-3 rounded-full bg-gray-500 duration-300 linear-ease transition-all ${currentPos === 0 && "bg-gray-900"}`}
          aria-current="true"
          aria-label="Slide 1"
          onClick={() => {
            setCurrentPos(0)
          }}
        ></button> */}

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
