const inquirer = require('inquirer')
const gradient = require('gradient-string')
const fs = require('fs')
const Word = require('./Word')
var wordBank = []

function newWord () {
  fs.readFile('Vocab.txt', 'utf8', function (error, vocabulary) {
    if (error) {
      return console.log(error)
    }
    // console.log(gradient.summer(vocabulary))
    wordBank = vocabulary.split(' ')
    // console.log(gradient.summer(wordBank))
    picker(wordBank)
  })
}

function picker (wordBank) {
  var wordPick = wordBank[Math.floor(Math.random() * wordBank.length)]
  console.log('word picked is', wordPick)
  var word = new Word(wordPick)
  getGuess(word)
}

function getGuess (guess) {
  inquirer.prompt([
    {
      message: guess.wordString() + '\n\nGuess a letter...',
      name: 'userguess',
      type: 'input'
    }
  ]).then(function (answer) {
    guess.Checker(answer.userguess)
    getGuess(guess)
  })
}

function start () {
  newWord()
}
start()
