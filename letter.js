
//This constructor should be able to either display an underlying 
//character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
function Letter(targetChar) {
    //A string value to store the underlying character for the letter
    var targetChar = targetChar;
        //A boolean value that stores whether that letter has been guessed yet
    var correctGuessedLetter = false;
    
    //A function that returns the underlying character if the letter 
    //has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.showCharacter = function () {
        if (correctGuessedLetter) {
            return targetChar
        } else {
            return " _ "
        }
    }

    //A function that takes a character as an argument and checks it 
    //against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guessChecker = function (userNewGuess) {
        if (userNewGuess === targetChar) {
            correctGuessedLetter = true
        }
    }

}


//to export Letter.js file to word.js file
module.exports = Letter