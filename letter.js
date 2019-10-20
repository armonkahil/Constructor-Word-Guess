const gradient = require('gradient-string')
// Constructor
function Letter (letter) {
  // a string to store underlying character
  this.letter = letter
  // a string to return a placeholder
  this.wrong = '_'
  // a boolean that stores whether the letter had been guessed yet
  this.guessed = false
  // a function that returns an underlying character if the letter had been guessed, or a placeholder if it wasn't guessed
  this.guessReturn = function () {
    if (this.guessed) {
      return this.letter
    } else {
      return this.wrong
    }
  }
  // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.letterCheck = function (userGuess) {
    if (this.letter === userGuess) {
      this.guessed = true
      // console.log(gradient.summer('Correct!!'))
    }
  }
}
// export the constructor
module.exports = Letter
