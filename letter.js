//set up dashes for letters

var game = require('../Week11-Hangman/game');
var prompt = require('prompt');

dWord = [];

for(var i = 0; i < letters.length; i++) {
      dWord[i] = "_";
}   

module.exports.displayWord = dWord;