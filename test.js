var Letter = require("./letter.js");
var Word = require("./word.js");

//Part 1: Testing Letter Class:
console.log("\n****Part 1: testing Letter class ****")
//making a sample Letter
var testLetter = new Letter("a");
console.log("created testLetter to contain a...")
//initial call to showCharacter should return "_"
console.log("testLetter.showCharacter should return _? ",testLetter.showCharacter() );

//calling guessChecker with a wrong guess should make no change
testLetter.guessChecker("b");
console.log("made a wrong guess of b...")
//second call to showCharacter should still return "_"
console.log("testLetter.showCharacter should still return _? ",testLetter.showCharacter() );

//calling guessChecker with a correct guess should reveal that targetChar
testLetter.guessChecker("a");
console.log("made a correct guess of a...")
//this call to showCharacter should now return "a"
console.log("testLetter.showCharacter should now return a? ",testLetter.showCharacter() );



//Part 2: Testing Word Class:
console.log("\n****Part 2: testing Word class ****")
//msking a sample Word out of "hello" to store it as ["h","e","l","l","o"]
var testWord = new Word("hello");
console.log("stored the word of hello in testWord...");
//calling stringOfWord should return "_____"
console.log( "testWord.stringOfWord() should now return _____?",testWord.stringOfWord() );

//let's make a wrong guess of "b" that does not exist:
testWord.newCharGuessedChecker("b");
console.log("made a wrong guess of b against testWord...");
//calling stringOfWord should return "_____"
console.log( "testWord.stringOfWord() should now return _____?",testWord.stringOfWord() );

//let's make a correct guess of "e" that does exist:
testWord.newCharGuessedChecker("e");
console.log("made a correct guess of e against testWord....");
//calling stringOfWord should return "_e___"
console.log( "testWord.stringOfWord() should now return _e___?",testWord.stringOfWord() );

//let's make another correct guess of "l" that does exist:
testWord.newCharGuessedChecker("l");
console.log("made a correct guess of l against testWord...");
//calling stringOfWord should return "_ell_"
console.log( "testWord.stringOfWord() should now return _ell_?",testWord.stringOfWord() );
