//imported file from letter.js
var Letter = require("./letter.js")

//This constructor used to create an object representing the current 
//word the user is attempting to guess
function Word(targetWord) {
    // An array of new Letter objects representing the letters of the underlying word    
    var lettersOfTargetWord = [];
    for (var i=0; i<targetWord.length; i++){
        lettersOfTargetWord.push( new Letter(targetWord[i]) );
    }

    // A function that returns a string representing the word. This should call the function 
    //on each letter object (the first function defined in Letter.js) 
    //that displays the character or an underscore and concatenate those together.
    this.stringOfWord = function(){
        var result = "";
        for (var i = 0; i < lettersOfTargetWord.length; i++) {
            result += lettersOfTargetWord[i].showCharacter()
        }

        return result
    }
    
    // A function that takes a character as an argument and calls the guess function 
    //on each letter object (the second function defined in Letter.js)
    this.newCharGuessedChecker = function(newGuessedChar) {
        for (var i = 0; i < lettersOfTargetWord.length; i++) {
            lettersOfTargetWord[i].guessChecker(newGuessedChar);
        }
    }

}

module.exports = Word