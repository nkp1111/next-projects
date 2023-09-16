"use client";

import React, { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from "./rules.module.css"
import useGlobalContext from '@/lib/context';
import utilStyles from "@/app/utils.module.css"

export default function Rules() {
  const { isOpen, setIsOpen }:
    { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> } = useGlobalContext();
  const modalOpenStyles = "d-block bg-dark position-absolute"
  const modalCloseStyles = "d-none"
  return (
    <div className={`text-white bg-dark card ${isOpen ? modalOpenStyles : modalCloseStyles} ${styles.rules_body}`}>
      <div role="button" title="close button" className="fs-2 text-end ms-auto fw-semibold"
        onClick={() => setIsOpen(() => false)}>
        <AiOutlineCloseCircle />
      </div>
      <h3 className='fw-bold fs-2'>How to play</h3>
      {/* close button  */}
      <p className='d-block fs-5'>Each guess must be a valid 5-letter word.</p>
      <ul>
        <li>Each guess must be a valid 5-letter word.</li>
        <li>The color of the tiles will change to show how close your guess was to the word.</li>
      </ul>

      <h4 className='fs-6'>Examples</h4>
      <div className='mb-3'>
        <ExampleKey word="weary" classInc='bg-success' spInd={0} />
        <p className='m-0'>W is in the word and in the correct spot.</p>
      </div>
      <div className='mb-3'>
        <ExampleKey word="pills" classInc='bg-warning' spInd={1} />
        <p className='m-0'>I is in the word but in the wrong spot.</p>
      </div>
      <div className='mb-3'>
        <ExampleKey word="vague" classInc='bg-secondary' spInd={3} />
        <p className='m-0'>U is not in the word in any spot.</p>
      </div>
    </div>
  )
}

export function ExampleKey(
  { word, classInc, spInd }: { word: string, classInc?: string, spInd?: number }
) {
  return <p className='d-flex gap-2 m-0'>
    {word.split("").map((char, index) => {
      return <span key={index}
        className={`border-1 border-primary rounded-1 fw-bold fs-2 px-3 ${utilStyles.font_mono} ${spInd === index && classInc}`}>
        {char.toUpperCase()}
      </span>
    })}
  </p>
}
