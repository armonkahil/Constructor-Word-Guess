const Letter = require('./Letter.js')
function Word (correctWord) {
  // An array of new Letter objects representing the letters of the underlying word
  var letterArray = correctWord.split('')
  this.letters = []
  for (var i = 0; i < letterArray.length; i++) {
    var newChar = new Letter(letterArray[i])
    this.letters.push(newChar)
  }

  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js. that displays the character or an underscore and concatenate those together.
  this.wordString = function () {
    var wordDisplayed = ''
    for (var i = 0; i < this.letters.length; i++) {
      wordDisplayed += this.letters[i].guessReturn() + ' '
    }
    return wordDisplayed
  }
  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js
  this.Checker = function (letter1) {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].letterCheck(letter1)
    }
  }
  // A function that builds character through constructive criticism
  this.trashTalk = function () {
    var nodeArray = ['Yeah Right, lol', 'Try again', 'nope', 'seriously?', 'Suddenly I feel better about life', 'Try less', 'I can do this all day', 'facepalm', 'double facepalm', "It's okay, I wont tell anybody", 'oh boy', 'whoops', 'Are you even trying?', "You haven't quit yet?", 'You do realize Node is recording this, right?', "It's ok, its just a game.", 'Welp!!']
    var message = nodeArray[Math.floor(Math.random() * nodeArray.length)] + '\n'
    return message
  }
}

module.exports = Word
