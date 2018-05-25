//imported file from letter.js
var Word = require('./Word.js');
var inquirer = require('inquirer');
var newWord;

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
    newWord = new Word(targetWord);
    console.log("targetWord:",targetWord)
    //console.log("newWord:",newWord)
    playGame();
    //console.log(newWord.stringOfWord());
    
}

function playGame() {
    askQuestion();
    newWord.stringOfWord()
    

}
//ask question and evaluate results
function askQuestion() {
    inquirer.prompt(
        {
            type: "question",
            message: "Guess a letter between A-Z",
            name: "user_guess",
        })
        .then(function (response) {
            //console.log(response)
            var newGuessedChar = new Word(response.user_guess)
            
            newGuessedChar.newCharGuessedChecker(response.user_guess)
            if (!newGuessedChar === response.user_guess) {
                gameData.remainingGuess--
                console.log("Sorry!Incorrect Guess:(")
                console.log("You have ",gameData.remainingGuess,"remaining guess!")
            } else {
                console.log("Correct!!!")
            }
        });
}
gameSetup();
