"use client";

import styles from "@/app/utils.module.css"
import useGlobalContext from "@/lib/context"

export default function GuessBox() {
  const { guessBoxLetters, currentWord } = useGlobalContext()
  return (
    <div className='mx-auto mt-3'>
      {Array(6).fill(0).map((_, index) => (
        <div className='d-flex gap-2 mt-2' key={index}>
          {Array(5).fill(0).map((_, ind) => (
            <div key={ind} className={`border-1 border-primary rounded-1 d-flex justify-content-center align-items-center ${styles.guess_box_item}`}>
              {
                (guessBoxLetters && guessBoxLetters.length > index && guessBoxLetters[index][ind])
                ||
                (guessBoxLetters.length === index && currentWord.length > ind && currentWord[ind])
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
