//imported file from letter.js
var Word = require('./Word.js');
var inquirer = require('inquirer');
var targetWord;

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
    var pickedTargetWord = wordList[Math.floor(Math.random() * wordList.length)];
    targetWord = new Word(pickedTargetWord);
    console.log("targetWord:", targetWord)
    //console.log("newWord:",newWord)
    playGame();
    //console.log(newWord.stringOfWord());

}

function playGame() {
    askQuestion();
    // newWord.stringOfWord()
}
//ask question and evaluate results
function askQuestion() {
    inquirer.prompt([
        {
            type: "question",
            message: "Guess a letter between A-Z",
            name: "user_guess",
        }
    ])
        .then(function (response) {
            console.log("user selected char:", response);
            targetWord.newCharGuessedChecker(response.user_guess);
            var guessedSoFar = targetWord.stringOfWord();
            console.log(guessedSoFar)

            // if (newGuessedChar !== response.user_guess) {
            //     gameData.remainingGuess--
            //     console.log("Sorry!Incorrect Guess:(")
            //     console.log("You have ",gameData.remainingGuess,"remaining guess!")
            // } else {
            //     console.log("Correct!!!")
            // }
        });
}


gameSetup();
