// var letter = require('../Week11-Hangman/letter');
// var game = require('../Week11-Hangman/game');
// var main = require('../Week11-Hangman/main');

// var guessesRemaining = letters.length + 5;
// var uGuess = main.userGuess;
// var displayWord = letter.dispWord;
// var lettersGuessed = [];
// var alreadyGuessed = [];
// var userInput = uGuess;
// var inWord = [];
// var userGuess;
// var x = [];
// var compare;

// //partially working- doubled on main page where it does work
// //not sure how to make this work with the prompt (or if it can work)
// function processUserChoice() { 


// //partially working- doubled on main page 
//  for(var i = 0; i < letters.length; i++) {
//       if (userInput === letters[i]) {
//         displayWord[i] = userInput;
//       }
//     }
   
//     inWord = letters.indexOf(userInput) != -1;
//     alreadyGuessed = x.indexOf(userInput) != -1;
//     x = x + userInput;
//     compare = letters;
    
//     if (alreadyGuessed == true) {
//       console.log("\n*****You already guessed this letter.*****\n");
//     }
//     else if (inWord == false && userInput != lettersGuessed) {
//       console.log('\nYou guessed: ' + userGuess);
//       console.log("\nSorry, that is incorrect.\n");
//       guessesRemaining--;   
//     } 
//     else if (inWord == true && userInput != lettersGuessed) {
//       console.log("\nCorrect!\n");
//       guessesRemaining--;
//     }

//   }

// module.exports.makeChoice = processUserChoice;

