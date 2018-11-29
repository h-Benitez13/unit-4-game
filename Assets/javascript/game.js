// $document.ready--- runs whenever the ROM is ready for JS
$(document).ready(function (){
    
    // global variables//
    var wins = 0;
    var losses= 0;
    var min =19;
    var max = 120;
    var userEnter = 0;
    var totalScore = gameStart (min, max);

    //create function to randomize the totalscore number
    function gameStart (min, max){
        return Math.floor(Math.random() * (max-min +1) + min) ;

    } $("total-score").text("Total Score is: " + totalScore);







});


