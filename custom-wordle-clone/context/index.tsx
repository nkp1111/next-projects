"use client";

import { createContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

const AppProvider = (
  { children }: { children: React.ReactNode }
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wordToGuess, setWordToGuess] = useState("weary");
  const [guessBoxLetters, setGuessBoxLetters] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState("");
  const [currentPos, setCurrentPos] = useState(1);

  /**
   * @desc On key click handle game key event
   * @param key - string 
   */
  const handleKeyClick = (key: string) => {
    if (key === "Enter" && currentWord.length === 5) {
      // check current guess light up word
      setGuessBoxLetters(pre => [...pre, currentWord]);
      setCurrentWord("")
    }
    else if (key === "Delete") {
      if (currentWord.length > 0) {
        setCurrentWord(pre => pre.slice(0, pre.length - 1))
        setCurrentPos(pre => pre - 1)
      }
    }
    else {
      if (currentWord.length < 5) {
        setCurrentWord(pre => pre + key)
        setCurrentPos(pre => pre + 1)
      }
    }
  }

  useEffect(() => { console.log(currentWord) }, [currentWord]);

  return <AppContext.Provider
    value={{
      isOpen,
      setIsOpen,
      handleKeyClick,
      currentPos,
      currentWord,
      guessBoxLetters,
      wordToGuess,
    }}>
    {children}
  </AppContext.Provider>
}


export {
  AppProvider,
  AppContext,
}