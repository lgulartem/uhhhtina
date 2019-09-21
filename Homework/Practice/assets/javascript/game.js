var words = [
"energy",
"portland",
"madonna",
"views"];

var word = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var score = 0;

letters = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];


startGame();

function startGame() {
	word = words[Math.floor(Math.random() * words.length)];
	lettersInWord = word.split('');
	numBlanks = lettersInWord.length;
	for(var i = 0; i< numBlanks; i++) {
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('winCounter').innerHTML = winCount;
}

function compareLetters(userKey) {
    if(word.indexOf(userKey) > -1) {
        for(var i = 0; i < numBlanks; i++) {
            if(lettersInWord[i] === userKey) {
                score++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
            }	
        }
    }
		
}

function winLose() {
	if(score === numBlanks) {
		scoret++;
		document.getElementById('winCounter').innerHTML = score;
        alert('"The 6 God says WE MADE IT!!!');
    }
}


document.onkeyup = function(event) {
	var letterGuessed = event.key;
	for(var i = 0; i < letters.length; i++) {	
		if(letterGuessed === letters[i]) {
			var splicedWord = letters.splice(i,1);
			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}