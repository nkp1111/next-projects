import { Dispatch, SetStateAction } from "react";


/**
 * @desc On mouse click on virtual keyboard handle click event
 * @param key - character mouse clicked 
 * @param currentWord - word guessed until now (max 5 characters)
 * @param setCurrentWord - function to change current word
 * @param setGuessBoxLetters - function to add guessed word (5 character long) to list of guessed words 
 */
export const handleKeyClick = (
  key: string,
  currentWord: string,
  setGuessBoxLetters: Dispatch<SetStateAction<string[]>>,
  setCurrentWord: Dispatch<SetStateAction<string>>
) => {
  if (key === "Enter" && currentWord.length === 5) {
    // check current guess light up word
    setGuessBoxLetters(pre => [...pre, currentWord]);
    setCurrentWord("")
  }
  else if (key === "Delete") {
    if (currentWord.length > 0) {
      setCurrentWord(pre => pre.slice(0, pre.length - 1))
    }
  }
  else {
    if (currentWord.length < 5) {
      setCurrentWord(pre => pre + key)
    }
  }
}