import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast';

/**
 * 
 * @param gameWon boolean, tell whether game is won or lose
 * @param guessBoxLetters [string], show all attempts of guessing correct word
 * @param userId string, current user userId
 * @param setUserData function, to set user data after updating game result
 */
export default async function updateUserResult(
  gameWon: boolean,
  guessBoxLetters: string[],
  userId: string,
  setUserData: Dispatch<SetStateAction<{}>>
) {
  try {
    const res = await fetch("/api/countResult", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameWon, guessTurns: guessBoxLetters.length, userId }),
    })
    const { success, user, error } = await res.json();
    if (success) {
      toast.success("Result updated")
      setUserData(user);
    }
  } catch (error) {
    toast.error(JSON.stringify(error))
  }
}
