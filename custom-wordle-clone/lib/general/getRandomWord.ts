/**
 * @desc uses random-word-api to get random word
 * @param {numOfLetter} number - number of letter required in given word
 * @param {numOfWord} number - number of words required
 */
export default async function getRandomWords(
  { numOfLetters = 5, numOfWords = 1 }: {
    numOfLetters?: number,
    numOfWords?: number,
  }
) {
  const randomWordApiUrl = `https://random-word-api.herokuapp.com/word?length=${numOfLetters}&number=${numOfWords}`;
  const res = await fetch(randomWordApiUrl)
  const data = await res.json();
  return data
}
