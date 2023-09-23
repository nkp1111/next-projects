import { Dispatch, SetStateAction } from "react";
import checkWordInDictionary from "./checkWordInDictionary";
import toast from "react-hot-toast"

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
  if (key === "Enter") {
    if (currentWord.length === 5) {
      // check current guess light up word
      checkWordInDictionary(currentWord).then(data => {
        if (!data) {
          console.log("word not in dictionary");
        }
        setGuessBoxLetters(pre => [...pre, currentWord]);
        setCurrentWord("")

      })
    } else {
      toast.error("Please enter 5 letter word first")
    }
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