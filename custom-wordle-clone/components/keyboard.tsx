"use client";

import styles from "@/app/utils.module.css"
import useGlobalContext from "@/lib/context"

const KEYS: { readonly [key: string]: string[] } = {
  topKeys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  midKeys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  bottomKeys: ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"],
}

const keyStyles = 'd-flex flex-row gap-2 mt-1 rounded-1 flex-grow p-2 ' + styles.key_hover
export default function Keyboard() {
  const { handleMouseKeyClick, guessBoxLetters, wordToGuess } = useGlobalContext()
  const allWordsEntered = guessBoxLetters.join("");
  console.log(allWordsEntered, wordToGuess.toUpperCase());
  return (
    <div className='mt-3'>
      {Object.keys(KEYS).map(key => (
        <div key={key} className={`d-flex align-items-center justify-content-center gap-1 ${key === "midKeys" && "px-2"}`}>
          {KEYS[key].map((key, index) => (
            <div key={index} role="button" title={key}
              className={`${keyStyles} ${allWordsEntered.includes(key) ? wordToGuess.toUpperCase().includes(key) ? styles.key_correct : styles.key_incorrect : "bg-secondary"}`}
              onClick={() => handleMouseKeyClick(key)}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
