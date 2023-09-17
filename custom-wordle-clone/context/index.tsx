"use client";

import { handleKeyClick } from "@/lib/handleKeyClick";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

const AppProvider = (
  { children }: { children: React.ReactNode }
) => {
  // control rule modal to show rules
  const [isRuleOpen, setIsRuleOpen] = useState(false);
  // control won modal showed when user won
  const [isResultOpen, setIsResultOpen] = useState(false);
  // word that used needs to guess
  const [wordToGuess, setWordToGuess] = useState("weary");
  // words guessed until now are here
  const [guessBoxLetters, setGuessBoxLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState({ isGameOver: false, gameWon: false });
  // current word, character user guessed
  const [currentWord, setCurrentWord] = useState("");

  const handleMouseKeyClick = (key: string) => {
    handleKeyClick(key, currentWord, setGuessBoxLetters, setCurrentWord)
  }

  useEffect(() => {
    const handleGameStatus = () => {
      const lastGuessed: string = guessBoxLetters.length > 0
        ? guessBoxLetters[guessBoxLetters.length - 1] : "";

      const gameWon = lastGuessed.toLowerCase() === wordToGuess.toLowerCase();
      if (gameWon) {
        setGameStatus({ isGameOver: true, gameWon })
        setIsResultOpen(true);
      }
      if (guessBoxLetters.length === 6) {
        setGameStatus({ isGameOver: true, gameWon: false })
        setIsResultOpen(true);
      }
    }
    handleGameStatus();
  }, [guessBoxLetters, wordToGuess])


  useEffect(() => { console.log(currentWord) }, [currentWord]);

  return <AppContext.Provider
    value={{
      isRuleOpen,
      setIsRuleOpen,
      handleMouseKeyClick,
      currentWord,
      guessBoxLetters,
      wordToGuess,
      isResultOpen,
      setIsResultOpen,
      gameStatus,
      setGuessBoxLetters,
    }}>
    {children}
  </AppContext.Provider>
}


export {
  AppProvider,
  AppContext,
}