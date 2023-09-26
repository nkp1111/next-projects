import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast';

/**
 * @desc Gets current user custom words
 * @param wordId string 
 */
export default async function getCustomWordById(
  wordId: string,
  gameReset: (customWord?: string) => Promise<void>,
) {
  try {
    const res = await fetch(`/api/getUserWords/${wordId}`)
    const { success, customWord, error, message } = await res.json();
    if (success) {
      toast.success(message);
      // game reset with custom word 
      await gameReset(customWord.word);
    }
    if (error) {
      toast.error(error);
    }
  } catch (error) {
    toast.error(JSON.stringify(error))
  }
}
