// var to store inquirer package
const inquirer = require('inquirer')
// var to store gradient string package
const gradient = require('gradient-string')
// var to store file system package
const fs = require('fs')
// var to store Word constructor
const Word = require('./Word')
// var to store words from vocab.txt
var wordBank = []
// var to store acceptable answers for validation
var acceptable = []
// var to store letters already guessed
var alreadyGuessed = []
// var to store word randomly picked from vocab.txt
var wordPick = ''
// var to store guess counter
var counter = 8

// =============================================================================
// Game functions
// =============================================================================

// function that reads compliance.txt and stores the data in an array
function parameters () {
  // read compliance.txt
  fs.readFile('compliance.txt', 'utf8', function (error, compliant) {
    // if error, console log error
    if (error) {
      return console.log(error)
    }
    // set array equal to data read
    acceptable = compliant.split('')
  })
}

// function that reads vocab.txt and stores the data in an array
function buildVocab () {
  // read vocab.txt
  fs.readFile('Vocab.txt', 'utf8', function (error, vocabulary) {
    // if error, console log it
    if (error) {
      return console.log(error)
    }
    // set array equal to data read
    wordBank = vocabulary.split(' ')
    // run word picker function
    picker(wordBank)
  })
}

// function that randomly picks a word from wordBank array
function picker (wordBank) {
  // set var to randomly picked word
  wordPick = wordBank[Math.floor(Math.random() * wordBank.length)]
  // send random word to Word constructor
  var word = new Word(wordPick)
  // start the guess function
  getGuess(word)
}

// function to ask whether to start next game
function nextGame () {
  // use inquirer to confirm continued play
  inquirer.prompt([
    {
      type: 'confirm',
      message: gradient.vice('Feeling lucky? Play again?\n'),
      name: 'confirm',
      default: true
    }]).then(function (foolish) {
    // if foolish enough to keep playing
    if (foolish.confirm) {
      // reset counter
      counter = 8
      // reset user guesses
      alreadyGuessed = []
      // pick next word
      picker(wordBank)
    } else {
      // if not foolish, let player down as easily as possible
      console.log(gradient.fruit('\nOnly losers quit!!\n'))
    }
  })
}

// function that handles guess operation
function getGuess (guess) {
  // use inquirer to get guess
  inquirer.prompt([
    {
      message: gradient.summer('Guesses left: ' + counter + '\nLetters already guessed: ' + alreadyGuessed.toString() + '\n' + guess.wordString() + '\n\nGuess a letter...'),
      name: 'userguess',
      // validation function
      validate: function (letter) {
        // if user selects a non alphabet character or its already been guess, block input
        return (acceptable.includes(letter) && !alreadyGuessed.includes(letter))
      }
    }
  ]).then(function (answer) {
    // var for user guess
    var nextLetter = answer.userguess.toLowerCase()
    // push user guess to already guessed array
    alreadyGuessed.push(nextLetter)
    // send user guess to Word constructor
    guess.Checker(nextLetter)
    // var to store new string without placeholders after user guess
    var newString = guess.wordString().split('_').join('')
    // remove empty spaces
    newString = newString.split(' ').join('')
    // if new string doesnt equal original word
    if (newString !== wordPick && counter > 0) {
      // if new string includes guessed letter
      if (newString.includes(nextLetter)) {
        console.log(gradient.vice('\n' + nextLetter + ' was CORRECT!!\n'))
        getGuess(guess)
      } else {
        // if not
        counter--
        console.log(gradient.passion('\n' + guess.trashTalk() + '\n' + nextLetter + ' was WRONG!!\n'))
        getGuess(guess)
      }
      // if new string does not equal original word and out of guesses
    } else if (newString !== wordPick && counter <= 0) {
      console.log(gradient.passion('\nYOU LOST!!\n\nThe correct word was ' + wordPick.toUpperCase() + '\n'))
      // start next game function
      nextGame()
    } else {
      console.log(gradient.vice('\nYOU WIN!!\n\nThe correct word was ' + wordPick.toUpperCase() + '\n'))
      // start next game function
      nextGame()
    }
  })
}
// start function
function start () {
  parameters()
  buildVocab()
}
// start game
start()
