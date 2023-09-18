
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
    if (data.title === "No Definitions Found") return false;
    else return true;
  } catch (error) {
    return false;
  }
}
