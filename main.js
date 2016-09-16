var fs = require("fs");
var prompt = require('prompt');
var inquirer = require('inquirer');
var letter = require('../Week11-Hangman/letter');
var game = require('../Week11-Hangman/game');
var word = require('../Week11-Hangman/word');
 
var displayWord = letter.displayWord;
var wordDisplay = displayWord.join(' ');
var letterString = letters.join(' ');
var guessesRemaining = letters.length + 5;
var compare = [];
var lettersGuessed = [];
var win = 0;
var loss = 0;

//this uses word chosen in game.js
function PlayGame(gameplay) {
  this.gameplay = gameplay;
  this.letters = game.letter;
  console.log("gameplay letters = " + letters)
}

//show end of game results with moon/stars for a win, martini for a loss
PlayGame.prototype.isFinished = function() {
  if (!wordDisplay.includes('_')) {
    console.log(" letters = " + letters);
    console.log(" displayWord = " + displayWord);
    console.log("type letters = " + typeof letters);
    console.log("type displayWord = " + typeof displayWord);

    console.log('\n          ★ ° ☾ ☆ ¸. ¸ ★ . . • ○ ° ★ . . ☾ . ¸ . ° ¸ .★ . . °☆');
    console.log('\n                         Cheers! Well done!');
    console.log('\n           ● ¸ ☆ ° ☾ ° ¸ ● ¸ . ★ ° .  • ° . ☆ . ○ ¸ ● ¸ ★ • ☾');
    win++;
    console.log("Wins: " + win);
    console.log("Losses: " + loss);
    console.log("******************************************************************************"); 
    guessesRemaining = 0;
    playGame.callNewGame();
    return true;
  } 
  else if (letterString != wordDisplay && guessesRemaining === 0) { 
    console.log(" letters = " + letters);
    console.log(" displayWord = " + displayWord);
    console.log("type letters = " + typeof letters);
    console.log("type displayWord = " + typeof displayWord);
    console.log(" wordDisplay = " + wordDisplay);
    console.log("type wordDisplay = " + typeof wordDisplay);
    console.log(" letterString = " + letterString);
    console.log("type letterString = " + typeof letterString);
    console.log("wordDisplay includes _ = " + wordDisplay.includes('_'));
    
    console.log('\n\nSorry you lost- but here\'s a martini!');
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
    console.log("******************************************************************************"); 
    playGame.callNewGame();
    return true;
  }
  return false;
}

// show word to guess as dashes from letter.js
console.log("******************************************************************************");
      console.log("                   " + displayWord.join(' '));

//uses word processed in word.js
PlayGame.prototype.guessing = function(cb) {
  var self = this;
  wordDisplay = displayWord.join(' ');

  //gets user input
  if(guessesRemaining > 0 && wordDisplay.includes('_')) { //maybe uneeded?- nope, needed
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
      
   
      // word.makeChoice();

      //determines if letter is correct, incorrect, or already guessed
      // PlayGame.prototype.sorting = function(cb) { 
      for(var i = 0; i < letters.length; i++) {
        if (userGuess === letters[i]) {
          displayWord[i] = userGuess;
        }
      }
     
      var inWord = letters.indexOf(userGuess) != -1;
      var alreadyGuessed = compare.indexOf(userGuess) != -1;
      compare.push(userGuess);
      // compare = letters;

      if (guessesRemaining === 0) {
        cb(); 
      }
      
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
      // else if (guessesRemaining === 0) {return; }
        console.log("******************************************************************************");
        console.log("                   "+ displayWord.join(' '));
        console.log("\n               Guesses Remaining: "  + guessesRemaining);
        console.log("              Letters guessed:  "  + lettersGuessed); 
        console.log("******************************************************************************"); 
        
      //   cb();
      // playGame.sorting();
      // });

       cb();
      }); 
    };
  }   

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
      message: "Press enter to play a new game."

    }]).then(function(answer) {
      if (answer.input != null && e.keyCode == 13) {
        console.log("foo");
        //reset ??????
      displayWord = [];
      letters = game.letters;
      PlayGame();
      console.log("New Game!");
      cb(true);
      }
    });
  } 
  else {
    return;
    cb(false);
  }
}
  
//play game and prompt for another
function hangman() {

}
var playGame = new PlayGame(game.names);
playGame.play(function() {
  console.log("Game is done!");
  // playGame.guessing(); 
  // playGame.isFinished();
  // playGame.rightWrong(); 
  playGame.callNewGame();
});
