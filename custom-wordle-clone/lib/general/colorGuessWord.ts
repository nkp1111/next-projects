
/**
 * @desc Check whether char is correctly guessed for given index
 * @param {correctWord} string - correct word to guess
 * @param {char} string - character guessed
 * @param {index} number - guessed char position in correctWord
 * @returns bootstrap classes for determining the correctness of the guessed char/word
 */
export default function colorGuessWord(
  { correctWord, char, index }
    : { correctWord: string, char: string, index: number }
) {
  correctWord = correctWord.toLowerCase();
  char = char.toLowerCase();
  return correctWord[index] === char ? "bg-success"
    : correctWord.includes(char) ? "bg-warning" : "bg-secondary";
}
