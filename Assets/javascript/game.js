// global variables

//variable total score
var min = 19
var max = 120

// variable for image
var crystalImg = $("crystal-image");
// variable for numbers to choose from for the image
var numbersCrystal = 0;

// variable for wins
var wins= 0;
// variable for losses
var losses= 0;


var totalScore = gameStart(min,max);
// function to start the game with the randomizing of total score
    function gameStart (min, max) {
          return Math.floor(Math.random() * (max - min +1) + min);
    }$(".total-score").text(totalScore);

//function to start the game with the randomizing of crystal numbers



