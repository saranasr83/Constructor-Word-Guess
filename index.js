//imported file from letter.js
var Word = require('./Word.js');
var inquirer = require('inquirer');

//list of words
var wordList = ["pizza", "pasta", "steak", "burger", "soup"];
//gameData
var gameData = {
    remainingGuess: 8,
    wins: 0,
    losses: 0
};
function gameSetup() {
    gameData.remainingGuess = 8;
    //choose a random word from the wordList
    var targetWord = wordList[Math.floor(Math.random() * wordList.length)];
    var newWord = new Word(targetWord);

    newWord.stringOfWord();
    playGame();
}

function playGame() {
    askQuestion();
    //user makes a guess

    //call the result function
    gameResult();
}

function askQuestion() {
    inquirer.prompt(
        {
            type: "question",
            message: "?Guess a letter",
            name: "user_guess",
        })
        .then(function (response) {
            //console.log(response)

        });
}

function gameResult() {

}