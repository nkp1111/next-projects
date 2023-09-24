import toast from "react-hot-toast";
import checkWordInDictionary from "./checkWordInDictionary";
import getRandomWords from "./getRandomWord";
import { Dispatch, SetStateAction } from "react";

/**
 * 
 * @param {numOfLetter} number - number of letter required in given word
 * @param {numOfWord} number - number of words required
 * @param {setWordToGuess} function - set valid word as new word to guess in game
 */
export default async function getRandomValidWords(
  { numOfLetters = 5, numOfWords = 1, setWordToGuess }: {
    numOfLetters?: number,
    numOfWords?: number,
    setWordToGuess: Dispatch<SetStateAction<string>>,
  }
) {
  let wordFound = false;

  while (!wordFound) {
    const data: string[] = await getRandomWords({ numOfLetters, numOfWords: 10 });
    for (let word of data) {
      if (await checkWordInDictionary(word)) {
        toast.success("New word found to guess!");
        setWordToGuess(word)
        wordFound = true;
        break;
      }
    }
  }
}
