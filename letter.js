//set up dashes for letter replacement

var game = require('../Week11-Hangman/game');
var prompt = require('prompt');

dWord = [];

for(var i = 0; i < letters.length; i++) {
      dWord[i] = "_";
}   

module.exports.dispWord = dWord;