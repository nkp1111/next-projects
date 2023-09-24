import React, { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast';

/**
 * @desc Gets current user custom words
 * @param setUserCustomWords 
 */
export default async function getUserCustomWords(
  setUserCustomWords: Dispatch<SetStateAction<never[]>>,
) {
  try {
    const res = await fetch("/api/getUserWords", {
      credentials: "include"
    })
    const { success, customWords, error, message } = await res.json();
    if (success) {
      toast.success(message);
      setUserCustomWords(customWords);
    }
    if (error) {
      toast.error(error);
    }
  } catch (error) {
    toast.error(JSON.stringify(error))
  }
}
