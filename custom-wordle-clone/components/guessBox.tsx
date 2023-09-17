"use client";

import styles from "@/app/utils.module.css"
import useGlobalContext from "@/lib/context"
import colorGuessWord from "@/lib/colorGuessWord";
import ColorKeyword from "./colorKey";

export default function GuessBox() {
  const { guessBoxLetters, currentWord, wordToGuess } = useGlobalContext()

  return (
    <div className='mx-auto mt-3'>
      {Array(6).fill(0).map((_, index) => (
        <div className='d-flex gap-2 mt-2' key={index}>
          {Array(5).fill(0).map((_, ind) => (
            <div key={ind} className={`border-1 border-primary rounded-1 d-flex justify-content-center align-items-center ${styles.guess_box_item}`}>
              {
                (guessBoxLetters && guessBoxLetters.length > index &&
                  <ColorKeyword word={guessBoxLetters[index][ind]} classInc={colorGuessWord({
                    correctWord: wordToGuess,
                    char: guessBoxLetters[index][ind],
                    index: ind
                  })}
                  />
                )
                ||
                (guessBoxLetters.length === index && currentWord.length > ind &&
                  <ColorKeyword word={currentWord[ind]} />
                )
              }
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
