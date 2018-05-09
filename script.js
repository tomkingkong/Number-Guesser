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

//Declare Minimum Input
var minIn = document.getElementById('minInput');

//Declare Maximum Input
var maxIn = document.getElementById('maxInput');

//Declare P tag - Too Low, High, or Boom! text
var isItCorrect = document.getElementById('result');

//Declare P tag Out of Range text
var outOfRange = document.getElementById('OOR');

//Declare Range Inputs
var theRange = document.getElementsByClassName('range');

//Declare Custom Game Button
var customRangeBtn = document.getElementById('custom');

//Generate random number
var answer = getRandomIntInclusive();


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

//Check if Custom Game Button is clicked, update Answer with new Range
customRangeBtn.addEventListener('click', getRandomIntInclusive);

//Create Answer on page load
document.addEventListener('load', getRandomIntInclusive);

//Check Submit Button Clicked
//Display Guess high/low/win
updateGuess.addEventListener('click', displayGuess);

//Check Submit Button Clicked
//Display Last Guess Text
updateGuess.addEventListener('click', displayLastGuess);

//Check if Return/Enter keypress -> add guess value to h1
guess.addEventListener('keyup', enterReturn);

//Check if User Input is out of Range of Min/Max
guess.addEventListener('input', isOutOfRange);

/*.............................................*/

//  FUNCTIONS

//Display Guess high/low/win
function displayGuess() {
  event.preventDefault();
      compareGuess();
      yourGuess.innerText = guess.value;
};

//Enter/Return pressed -> display guess
function enterReturn(event) {
  if (event.keyCode === 13 && displayLastGuess() == true) {
    displayGuess();
  }
};

//Enable Clear/Reset Buttons
function enableButtons() {
  if (guess.value !== "") {
    for(var i = 0; i < buttons.length; i++){
      buttons[i].disabled = false;
    }
  };
};

//Start Next Game After Win
function startNextGame() {
  if (isItCorrect.innerText === 'BOOM!') {
    setTimeout(function(){
      clearMe();

    }, 2000);
  };
};

//Enable Custom Game
function enableCustomGame() {
  if (console.count(win) * 5 === true){
    customRangeBtn.hidden = false;
    minIn.disabled = false;
    maxIn.disabled = false;
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

//Play bazinga audio file
function playAudioWin() {
  bazinga.play();
};

//Return Random Number Between Min and Max Values
function getRandomIntInclusive() {
  max = Math.floor(maxIn.value);
  min = Math.ceil(minIn.value);
  answer = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

  console.log(answer); //REMOVE

  return answer;
};

//Compare guess to min max values
//Prevent Num out of Min/Max Range
function isOutOfRange() {
  var min = parseInt(minIn.value);
  var max = parseInt(maxIn.value);
  var guessNum = parseInt(guess.value);
  if (guessNum < min) {
    outOfRange.innerText = 'Below Minimun';
    updateGuess.disabled = true;
    return false;
  } else if (guessNum > max) {
    outOfRange.innerText = 'Above Maximum';
    updateGuess.disabled = true;
    return false;
  } else {
    outOfRange.innerText = '';
    return true;
  };
};

//Compare guess to answer, print results
function compareGuess() {
var guessNum = parseInt(guess.value);
if (guessNum === answer) {
  playAudioWin(); //play bazinga audio on win
  isItCorrect.innerText = 'BOOM!';//display Boom! on win
} else if (guessNum < answer) { //display too low
  isItCorrect.innerText = 'That is too low';
  console.log('too low');
} else { //display too high
  isItCorrect.innerText = 'That is too high';
  console.log('too high?');
};
console.log(guessNum);
console.log(answer);
};

//Display Last Guess Text
function displayLastGuess() {
  var min = parseInt(minIn.value);
  var max = parseInt(maxIn.value);
  var guessNum = parseInt(guess.value);
  if (guessNum > min && guessNum < max){
    lastGuess.innerText = 'Your last guess was';
    return true;
  }
  
};

//Display "Not a Number" if NaN received
function NaNFool() {
  var x = (x) ? x : window.event; //who's daddy do i belong to?
  var charCode = (x.which) ? x.which : x.keyCode; //is this IE or everyone else?
  if (charCode > 31 && (charCode < 48 || charCode > 57)) { //plz, no characters but 0-9 (48-57)
    outOfRange.innerText = "This is not a number fool!";
  } else {
    outOfRange.innerText = "";
  };
};









// //-----------------------------------------------
// var box = document.querySelector('.box');
// var text = document.querySelector('.text-input');
// var changeText = document.querySelector('.change-text');
    
// changeText.addEventListener('click', function () {
//   box.innerText = text.value;
// });

// var prop = document.querySelector('.property');
// var val = document.querySelector('.value');
// var doIt = document.querySelector('.do-it');

// //Click to Add Styles
// doIt.addEventListener('click', addStyles);

// function addStyles() {
//   box.style[prop.value] = [val.value]; //replace .style.property with the entered property and replace the =value with entered value
// };

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

