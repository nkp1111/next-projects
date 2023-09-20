# Custom Wordle Clone

## Table of Contents

* [Links](#links)
* [Overview](#overview)
  * [Built With](#built-with)
* [Pages](#pages)
* [How to use](#how-to-use)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## Links

* [Live App](https://next-projects-three.vercel.app/)
* [GitHub](https://github.com/nkp1111/next-projects/tree/main/custom-wordle-clone)

## Overview

* A random word is chosen, User has to guess that word.

* if the guessed word is not in dictionary, then the word should not be treated as an actual attempt, but must be prompted to enter the word again

* on entering a word, each character in it gets a color on the keyboard
   1) Green : if the letters position is correct on the word
   2) Yellow : if the letter exists in the word but not in the correct order
   3) Black: if the letter does not exist in the word

## Pages

### Landing Page

![home page](./public/design/Landing%20Page%20[DESKTOP].png)

The page should contain the keyboard and boxes for the characters. The rules remain similar to the actual wordle game.

### How to play Page

![how to play](./public/design/How%20to%20Play%20[DESKTOP].png)

The games details are explained in the modal.

### Custom Wordle Page

Here, we can let the user generate a link for the custom word they choose.

![custom wordle](https://raw.githubusercontent.com/codedamn-projects/Custom-Wordle-Clone/master/designs/Custom%20Word%20Modal%20%5BDESKTOP%5D.png)

The custom wordle can be shared using the optional key value pair in the URL

### Correct Word Page

![correct word](./public/design/YOU%20WON!%20MODAL%20[DESKTOP].png)

## Built With

* Next.js
* React.js
* Typescript
* Bootstrap

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nkp1111/next-projects.git

# Go to project directory
$ cd custom-wordle-clone

# Install dependencies
$ npm install

# Run the app
$ npm run dev

```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Acknowledgements

* bootstrap
* react-icons
* dictionary api- [https://dictionaryapi.dev/](https://dictionaryapi.dev/).
* random-word-api [https://random-word-api.herokuapp.com/word](https://random-word-api.herokuapp.com/word?length=5)

## Contact

* Neeraj Parmar
* GitHub [nkp1111](https://github.com/nkp1111)
* Twitter [@nkp11111507](https://twitter.com/@nkp11111507)
