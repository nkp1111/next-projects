import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast';
import checkWordInDictionary from '@/lib/general/checkWordInDictionary';

let loadingToast;

/**
 * @desc Add new word to the user custom word for future challenge
 * @param wordToAdd string,
 * @param setWordToAdd function,
 * @param userId string,
 * @param setCustomWord function,
 * @returns 
 */
export default async function addNewCustomWord(
  wordToAdd: string,
  setWordToAdd: Dispatch<SetStateAction<string>>,
  userId: string,
  setCustomWord: Dispatch<SetStateAction<{
    wordId: string;
    word: string;
  }>>,
) {
  try {
    if (!await checkWordInDictionary(wordToAdd)) {
      toast.error("Word is not valid, Please enter a valid word");
      return;
    }
    loadingToast = toast.loading(`Word to add: ${wordToAdd}`);
    setWordToAdd("")
    const addCustomWordUrl = "/api/addCustomWord";
    const res = await fetch(addCustomWordUrl, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ userId, customWord: wordToAdd }),
    })

    const { success, error, word } = await res.json();
    // remove loading toast
    toast.dismiss(loadingToast);
    if (success) {
      setCustomWord({ word: word.word, wordId: word.wordId });
      toast.success(`New word added ${word.word}.`)
    } else {
      if (error) {
        toast.error("Words is already present as custom word");
        if (word) {
          setCustomWord({ word: word.word, wordId: word.wordId });
        }
      } else {
        toast.error(error);
      }
    }
  } catch (error) {
    toast.error(JSON.stringify(error));
  }
}
