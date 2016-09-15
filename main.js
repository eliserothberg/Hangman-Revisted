var fs = require("fs");
var prompt = require('prompt');
var inquirer = require('inquirer');
var letter = require('../Week11-Hangman/letter');
var game = require('../Week11-Hangman/game');
var word = require('../Week11-Hangman/word');
 
var displayWord = letter.dispWord;
var guessesRemaining = letters.length + 5;
var wordDisplay = displayWord.join(' ');
var theWord = wordDisplay;
var win = 0;
var loss = 0;
var displayWord = letter.dispWord;
var guessesRemaining = letters.length + 5;
var wordDisplay = displayWord.join(' ');
var theWord = wordDisplay;


//this uses word chosen in game.js
function PlayGame(gameplay) {
  this.gameplay = gameplay;
  this.letters = game.letters;
  console.log("gameplay letters = " + letters)
}

//supposed to end the game
PlayGame.prototype.isFinished = function() {
  if (guessesRemaining == 0 && letters == displayWord) {
    playerGame.callNewGame();
  }
}

// show word to guess
console.log("******************************************************************************");
      console.log("                   " + displayWord.join(' '));

var compare = [];
var lettersGuessed = [];
var x = [];

//uses word processed in word.js
PlayGame.prototype.guessing = function(cb) {
  var self = this;
  wordDisplay = displayWord.join(' ');
  theWord = wordDisplay;

  //gets user input
  if(this.guessesRemaining != 0 && theWord.includes('_')
    ) {
  var userGuess;
  
  var schema = {
    properties: {
      inputGuess: {
        description: 'Guess a letter',
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Your guess must be a letter.',
        required: true
      },
    }
  };

  prompt.start();
    prompt.get(schema, function (err, result) {
    userGuess = result.inputGuess.toUpperCase();
    lettersGuessed += userGuess + ",";
    module.exports.userGuess = userGuess;
   
    // word.makeChoice();
    
    // console.log("You guessed :" + userGuess);
    // console.log("Letters Guessed: " + lettersGuessed);
    // console.log("Guesses remaining: " + guessesRemaining);

    //determines if letter is correct, incorrect, or already guessed
    for(var i = 0; i < letters.length; i++) {
      if (userGuess === letters[i]) {
        displayWord[i] = userGuess;
      }
    }
   
    var inWord = letters.indexOf(userGuess) != -1;
    var alreadyGuessed = x.indexOf(userGuess) != -1;
    x = x + userGuess;
    compare = letters;
    
    if (alreadyGuessed == true) {
      console.log("\n*****You already guessed this letter.*****\n");
    }
    else if (inWord == false && userGuess != lettersGuessed) {
      console.log('\nYou guessed: ' + userGuess);
      console.log("\nSorry, that is incorrect.\n");
      guessesRemaining--;   
    } 
    else if (inWord == true && userGuess != lettersGuessed) {
      console.log("\nCorrect!\n");
      guessesRemaining--;
    }
    // else {console.log("else"); 
    // }
      console.log("******************************************************************************");
      console.log("                   "+ displayWord.join(' '));
      console.log("\n               Guesses Remaining: "  + guessesRemaining);
      console.log("              Letters guessed:  "  + lettersGuessed); 
      console.log("******************************************************************************"); 
      
      cb();
    });
    
  // if loss, show martini, if won, show moon/stars
  // PlayGame.prototype.endGame = function() {
     if (guessesRemaining === 0 && letters != displayWord) {      
      console.log('\nSorry you lost- but here\'s a martini!');
      console.log("                           _______/_  ");
      console.log("                           \\     Ø / ");
      console.log("                            \\   Ø /  ");
      console.log("                             \\ Ø /   ");
      console.log("                              \\ /    ");
      console.log("                               |      ");
      console.log("                               |      ");
      console.log("                               |      ");
      console.log("                              ===     ");
      loss++;
      console.log("Wins: " + win);
      console.log("Losses: " + loss);
      playGame.callNewGame();
    }
    if (letters == displayWord && guessesRemaining >= 0) {
      console.log('\n        ★ ° ☾ ☆ ¸. ¸ ★ . . • ○ ° ★ . . ☾ . ¸ . ° ¸ .★ . . °☆');
      console.log('\n                         Cheers! Well done!');
      console.log('\n        ● ¸ . ° ☾ ° ¸. ● ¸ . ★ ° . . • ° . * . . ¸ ● ¸ ★ . ☾');
      win++;
      console.log("Wins: " + win);
      console.log("Losses: " + loss);
      guessesRemaining = 0;
      playGame.newGame();
    } 
  }
}
// }

//function to ensure game is played through to the end, then ends
PlayGame.prototype.play = function(cb) {
  var self = this;
  if(this.isFinished()) {
    cb();
  } 
  else {
    this.guessing(function() {
      self.play(cb);
    });
  }
}
//call for a new game
PlayGame.prototype.callNewGame = function(cb) {
  if(guessesRemaining === 0) {
    inquirer.prompt([{
      type: "input",
      name: "input",
      message: "Enter y to play a new game."
    }]).then(function(answer) {
      if (answer.input === y || Y) {
        //reset how??????
      displayWord = [];
      playGame();
      console.log("New Game!");

      cb();
      }
    });
  } 
  else {
    return;
    cb();
  }
}
  
//play game and prompt for another
var playGame = new PlayGame(game.names);
playGame.play(function() {
  playGame.isFinished();
  playGame.rightWrong();
  playGame.endGame(); 
  playGame.callNewGame();
});
