import toast from "react-hot-toast"

/**
 * @desc Checks if the word is in dictionary valid word or not
 * @param word - word to check if is valid
 * @returns true/false boolean
 */
export default async function checkWordInDictionary(
  word: string
) {
  try {
    const dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const res = await fetch(dictionaryApi)
    const data = await res.json();
    if (data.title === "No Definitions Found") {
      toast.error("Word not found in dictionary")
      return false
    }
    else return true;
  } catch (error) {
    toast.error("Word not found in dictionary")
    return false;
  }
}
