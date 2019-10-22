## Constructor Word Guess Game

### Advanced Javascript Assignment ~~(optional)~~

### In this assignment, you will make a command line word guess game. I incorporated the same 1,291 of the hardest words in the English Language. Good luck

### Letter.js: 
Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
- A string value to store the underlying character for the letter
- A boolean value that stores whether that letter has been guessed yet
- A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
- A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



### Word.js: 
Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
- An array of new Letter objects representing the letters of the underlying word
- A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
- A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)



### index.js: The file containing the logic for the course of the game, which depends on Word.js and:
- Randomly selects a word and uses the Word constructor to store it
- Prompts the user for each guess and keeps track of the user's remaining guesses

### Letter.js should not require any other files.

### Word.js should only require Letter.js

## Technologies Used
    - Node.js
    - Inquirer
    - Gradient-string
    - ESlint Syntax
    - Constructors

## Demo Pics

### As for most of my projects, early versions look very promising
![Early versions of the app were very promising](assets/images/tron1.gif)

### But eventually proved to be problematic
![Early versions of the app proved problematic](assets/images/tron2.gif)
![Early versions of the app proved problematic](assets/images/tron3.gif)

### Seriously problematic
![Wargames](assets/images/wargames.webp)

## Final Version

### Start
![Start image](assets/images/start.PNG)


### Wrong Answer
![Wrong Answer](assets/images/wrong.PNG)


### Correct Answer
![Correct Answer](assets/images/correct.PNG)


### Win
![Win](assets/images/win.PNG)


### Lose
![Lose](assets/images/lost.PNG)


### Continue
![Continue](assets/images/continue.PNG)
