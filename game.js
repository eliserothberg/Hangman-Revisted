
//store words and split into array

// StoreWords: function() {
  this.names = ['BELLINI', 'NEGRONI', 'SIDECAR', 'MARTINI', 'AVIATION', 'DAQUIRI', 'DUBONNET', 'MANHATTAN', 'SAZERAC', 'SOUTHSIDE', 'VESPER'];
  this.theLetters = [];
  this.choices = Math.floor(Math.random() * this.names.length);
  this.theDrink = this.names[this.choices];
  this.theLetters = this.theDrink.split('');

  // }

  letters = this.theLetters;
  drink = this.theDrink;
