"use client";

import getRandomValidWords from "@/lib/general/getRandomValidWord";
import { handleKeyClick } from "@/lib/general/handleKeyClick";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AppContext = createContext<any>(null);

const AppProvider = (
  { children }: { children: React.ReactNode }
) => {
  const [userData, setUserData] = useState({});
  // control rule modal to show rules
  const [isRuleOpen, setIsRuleOpen] = useState(false);
  // control won modal showed when user won
  const [isResultOpen, setIsResultOpen] = useState(false);
  // control auth modal for signUp and signIn
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  // control custom word addition form
  const [isAddCustomOpen, setIsAddCustomOpen] = useState(false);
  // word that used needs to guess
  const [wordToGuess, setWordToGuess] = useState("weary");
  // words guessed until now are here
  const [guessBoxLetters, setGuessBoxLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState({ isGameOver: false, gameWon: false });
  // current word, character user guessed
  const [currentWord, setCurrentWord] = useState("");

  // activate with virtual keyboard on screen(game event)
  const handleMouseKeyClick = (key: string) => {
    handleKeyClick(key, currentWord, setGuessBoxLetters, setCurrentWord)
  }

  // restarts new game after game over(game event)
  const gameReset = async () => {
    setGuessBoxLetters([]);
    setGameStatus({ isGameOver: false, gameWon: false });
    setIsResultOpen(false)
    // set new random valid word
    await getRandomValidWords({ numOfLetters: 5, numOfWords: 1, setWordToGuess })
  }

  // check game status (won or lose)
  useEffect(() => {
    const handleGameStatus = () => {
      const lastGuessed: string = guessBoxLetters.length > 0
        ? guessBoxLetters[guessBoxLetters.length - 1] : "";

      const gameWon = lastGuessed.toLowerCase() === wordToGuess.toLowerCase();
      if (gameWon) {
        toast.success("You guessed right, correct word was " + wordToGuess)
        setGameStatus({ isGameOver: true, gameWon })
        setIsResultOpen(true);
        return;
      }
      if (guessBoxLetters.length === 6) {
        toast.error("You guessed was not right, correct word was " + wordToGuess)
        setGameStatus({ isGameOver: true, gameWon: false })
        setIsResultOpen(true);
      }
    }
    handleGameStatus();
  }, [guessBoxLetters, wordToGuess])

  // get a random 5 letter valid word
  useEffect(() => {
    (async () => {
      await getRandomValidWords({ numOfLetters: 5, numOfWords: 1, setWordToGuess })
    })();
  }, []);

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
      gameReset,
      isAuthOpen,
      setIsAuthOpen,
      userData,
      setUserData,
      isAddCustomOpen,
      setIsAddCustomOpen,
    }}>
    {children}
  </AppContext.Provider>
}


export {
  AppProvider,
  AppContext,
}