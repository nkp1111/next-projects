# Custom Wordle Clone

## Landing Page

![home page](./public/design/Landing%20Page%20[DESKTOP].png)

The page should contain the keyboard and boxes for the characters. The rules remain similar to the actual wordle game.

* A random word is chosen

* if the entered word is not in dictionary, then the word should not be treated as an actual attempt, but must be prompted to enter the word again
You can this [https://dictionaryapi.dev/](https://dictionaryapi.dev/) as the dictionary api.

* on entering a word, each character in it gets a color on the keyboard
   1) Green : if the letters position is correct on the word
   2) Yellow : if the letter exists in the word but not in the correct order
   3) Black: if the letter does not exist in the word

### How to play Page

![how to play](./public/design/How%20to%20Play%20[DESKTOP].png)

The games details are explained in the modal, you can try and rephrase them if you want

### Custom Wordle Page

Here, we can let the user generate a link for the custom word they choose.

![custom wordle](https://raw.githubusercontent.com/codedamn-projects/Custom-Wordle-Clone/master/designs/Custom%20Word%20Modal%20%5BDESKTOP%5D.png)

The custom wordle can be shared using the optional key value pair in the URL

### Correct Word Page

![correct word](./public/design/YOU%20WON!%20MODAL%20[DESKTOP].png)
