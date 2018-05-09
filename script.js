//  VARIABLE DECLARATIONS

//Declare Clear Button
var clearBtn = document.getElementById('clear');

//Declare Guess Input
var  guess = document.getElementById('userinput');

//Declare Submit Guess Button
var  updateGuess = document.getElementById('submit');

//Declare Guess Number Display
var  yourGuess = document.querySelector('h1');

//Declare Your Last Guess Display
var lastGuess = document.getElementById('lastguess');

//Declare Reset Button
var resetBtn = document.getElementById('reset');

//Declare bazinga audio element
var bazinga = document.getElementById('correct');

//Declare Button array
var buttons = document.querySelectorAll('button');

/*.............................................*/


//  EVENT LISTENERS
//Enable Clear and Reset Buttons if text exists
guess.addEventListener("input", enableButtons);

//Disable Clear/Guess Buttons if textbox empty
guess.addEventListener("input", disableClearGuessBtns);

//Check for Clear Button click
//Clear Guess Textbox and Disable Clear Button
clearBtn.addEventListener('click', clearMe);

//Check Reset Button for Click -> Reload Page
resetBtn.addEventListener('click', newGame);

//Create Answer on page load
document.addEventListener('load', answer);

//Generate random number
var answer = Math.floor(Math.random() * 100 + 1);

//Check Submit Button Clicked
//Display Guess high/low/win
updateGuess.addEventListener('click', displayGuess);

//Check Submit Button Clicked
//Display Last Guess Text
updateGuess.addEventListener('click', displayLastGuess);

//Check if Return/Enter keypress -> add guess value to h1
guess.addEventListener('keyup', enterReturn);

/*.............................................*/

//  FUNCTIONS

//Enable Clear/Reset Buttons
function enableButtons() {
  if (guess.value !== "") {
    for(var i = 0; i < buttons.length; i++){
      buttons[i].disabled = false;
    }
  };
};

//Disable the Clear/Guess Buttons
function disableClearGuessBtns() {
  if (guess.value == ""){
    buttons[0].disabled = true;
    buttons[1].disabled = true;
  };
};

//Clear the Guess Textbox
//Disable the Clear/Guess Button
function clearMe() {
  guess.value = "";
  disableClearGuessBtns();
};

//Reload Page
function newGame() {
  location.reload();
};

//Display Guess high/low/win
function displayGuess() {
  event.preventDefault();
  yourGuess.innerText = guess.value;
  compareGuess();
};

//Play bazinga audio file
function playAudioWin() {
  bazinga.play();
};


var minIn = document.getElementById('minInput');
var maxIn = document.getElementById('maxInput');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

guess.addEventListener('input', isOutOfRange)
//Compare guess to min max values
//Prevent Num out of Min/Max Range
function isOutOfRange() {
  var min = parseInt(minIn.value);
  var max = parseInt(maxIn.value);
  var guessNum = parseInt(guess.value);
  if (guessNum < min) {
    lastGuess.innerText = 'Below Minimun';
    updateGuess.disabled = true; //diable guess button
  } else if (guessNum > max) {
    lastGuess.innerText = 'Above Maximum';
    updateGuess.disabled = true; //diable guess button
  } else {
    clearLastGuess();
  };
};

//Clear Last Guess if within range
function clearLastGuess() {
  lastGuess.innerText = '';
};
//Compare guess to answer, print results
function compareGuess() {
var state = document.getElementById('result');
var guessNum = parseInt(guess.value);
if (guessNum === answer) {
  playAudioWin(); //play bazinga audio on win
  state.innerText = 'BOOM!'; //display Boom! on win
} else if (guessNum < answer) { //display too low
  state.innerText = 'That is too low';
} else { //display too high
  state.innerText = 'That is too high';
};
console.log(guessNum);
console.log(answer);
};

//Display Last Guess Text
function displayLastGuess() {
  lastGuess.innerText = 'Your Last Guess Was';
};

//Display "Not a Number" if NaN received
function NaNFool() {
  var x = (x) ? x : window.event; //who's daddy do i belong to?
  var charCode = (x.which) ? x.which : x.keyCode; //is this IE or everyone else?
  if (charCode > 31 && (charCode < 48 || charCode > 57)) { //plz, no characters but 0-9 (48-57)
    lastGuess.innerText = "This is not a number fool!";
  };
};

//Enter/Return pressed -> display guess
function enterReturn(event) {
  if (event.keyCode === 13) {
    displayGuess();
  }
};









// //-----------------------------------------------
// var box = document.querySelector('.box');
//     text = document.querySelector('.text-input');
//     changeText = document.querySelector('.change-text');
    
// changeText.addEventListener('click', function () {
//   box.innerText = text.value;
// });

// var prop = document.querySelector('.property');
//     val = document.querySelector('.value');
//     doIt = document.querySelector('.do-it');
//     combo = prop.value + " = " + '"' + val.value + '";';
// doIt.addEventListener('click', function() {
//   // combo = prop.value + ":" + val.value;
//   // att = document.createAttribute("style");
//   // att.value = combo;
//   // box.setAttributeNode(att);
//   box.style[prop.value] = [val.value]; //replace .style.property with the entered property and replace the =value with entered value
// });

// document.addEventListener('keydown', function(event) {
//   var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
//   var inputs = document.getElementsByTagName('input'); //grab all inputs

//   for(var i = 0; i < inputs.length; i++) { //turn i into every instance
//     if(inputs[i].type.toLowerCase() === 'text') { //selects only text type inputs
//       if (x === 13) {  // 13 is the Return/Enter key
//         box.style[prop.value] = [val.value]; //update values of box
//         box.innerText = text.value;
//       }
//       }
//     }
//   }
// );

