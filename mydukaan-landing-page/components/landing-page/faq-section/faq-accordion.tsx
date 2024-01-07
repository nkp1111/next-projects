"use client";

import React, { useState } from 'react'
import minusIcon from "@/public/assets/faq-section/minus-icon.svg"
import plusIcon from "@/public/assets/faq-section/plus-icon.svg"
import Image from 'next/image';

export default function FaqAccordion({ faq: { question, answer } }: { faq: { id: number, question: string, answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className='bg-slate-50 rounded-sm p-4 shadow-md mt-5 transition-all duration-300 ease-linear'>
      <div className='flex justify-between gap-3'>
        <span className='font-medium text-lg'>{question}</span>
        <span role="button" aria-label='show answer'
          className='p-2'
          onClick={() => setIsOpen(pre => !pre)}>
          <Image
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "hide" : "show"}
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className={`${isOpen ? "block mt-3" : "hidden"}`}>
        <span className='transition-all duration-300 ease-linear text-gray-800'>{answer}</span>
      </div>
    </li>
  )
}

