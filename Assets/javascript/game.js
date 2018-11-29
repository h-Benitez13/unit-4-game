// $document.ready--- runs whenever the ROM is ready for JS
$(document).ready(function() {
    // alert("sooo this is NOT the crystal collector game");
    // confirm("are you still donw to play?");
    // global variables//
    var wins = 0;
    var losses= 0;
    var min =19;
    var max = 120;
    var userEnter = 0;
    var totalScore = gameStart (min, max);
    
    console.log (wins,losses,min,max,userEnter,totalScore);
    
    // create  global variables for the randomized image values
    
    var imgUno = Math.floor(Math.random() * 12) +1;
    var imgDos = Math.floor(Math.random() * 12) +1;
    var imgTres = Math.floor(Math.random() * 12) +1;
    var imgCuat = Math.floor(Math.random() * 12) +1;
    
    //create function to randomize the totalscore number
    function gameStart (min, max){
        return Math.floor(Math.random() * (max-min +1) + min) ;
    } $(".totalScore").text("Match Score: " + totalScore);
    console.log(gameStart);
    console.log(totalScore);
    
    // restarting the game function= resets errrrrthang
    // total score is randomized again
    // user's tallied score back to zero
    // randomize the img values
    function restartGame () {
        totalScore = Math.floor(Math.random() * (max - min +1) +min);
        $(".totalScore").text("Total Score is: " + totalScore);
        userEnter = 0
        $(".userEnter").text("You're score is " + userEnter);
        var imgUno = Math.floor(Math.random() * 12) +1;
        var imgDos = Math.floor(Math.random() * 12) +1;
        var imgTres = Math.floor(Math.random() * 12) +1;
        var imgCuat = Math.floor(Math.random() * 12) +1;
        console.log(totalScore);
        console.log(imgUno, imgDos, imgTres, imgCuat);
    }
    // ===========================================================================
    
        // now lets creates some alerts homie
    
    
    // what if the player gets lucky and matches the total score
    // wins increase by one
    // alert that they have won
    // restartGame
    function allIDoIsWin () {
        alert ("MY GUY, you is a genius!! ");
        wins ++;
        console.log(wins);
        $(".win-count").text("Championship rings= " + wins);
        restartGame();
        console.log(restartGame);
    }
    
    
    
    
    // if players loses..like the loser they are
    function sucksToLose () {
        alert ("You LOSE. GO HOME!");
        losses ++;
        console.log(losses);
        $(".loss-count").text("Sad Faces= " + losses);
        restartGame();
    }
    // ======================================================================
    var imgUno = Math.floor(Math.random() * 12) +1;
    var imgDos = Math.floor(Math.random() * 12) +1;
    var imgTres = Math.floor(Math.random() * 12) +1;
    var imgCuat = Math.floor(Math.random() * 12) +1;
    // trouble in the path of excellance
    // first create value to the imgs so they can be pressed upon 
    $("button").val(imgUno, imgDos, imgTres, imgCuat);
    
    console.log (imgUno, imgDos, imgTres, imgCuat);
    
    // moving on to the first img
    // make the img clickable
    $(".imageUno").click(function() {
        // once clicked we want the score it was assigned 
        // to be added to the users score
        userEnter += imgUno;
        // then i want this clicked value to be pushed onto the area 
        // of which the user score is at? my wording is off...
        $(this).attr({
            "userEnter": userEnter
        });
        // call the div from html to print
        $(".userEnter").text(userEnter);
    
        // if at any pt the users score matches the tallied score 
        // alert win win
            if (userEnter === totalScore) {
                allIDoIsWin();
            } 
            // but if it goes over then 
            else if (userEnter > totalScore) {
                sucksToLose();
            }
    })
    // now repeat for the other images bro
    
    // imageTwo
    $(".imageDos").click(function() {
        // once clicked we want the score it was assigned 
        // to be added to the users score
        userEnter += imgDos;
        // then i want this clicked value to be pushed onto the area 
        // of which the user score is at? my wording is off...
        $(this).attr({
            "userEnter": userEnter
        });
        // call the div from html to print
        $(".userEnter").text(userEnter);
    
        // if at any pt the users score matches the tallied score 
        // alert win win
            if (userEnter === totalScore) {
                allIDoIsWin();
            } 
            // but if it goes over then 
            else if (userEnter > totalScore) {
                sucksToLose();
            }
    })
    
    // imageThree
    $(".imageTres").click(function() {
         // once clicked we want the score it was assigned 
        // to be added to the users score
        userEnter += imgTres;
        // then i want this clicked value to be pushed onto the area 
        // of which the user score is at? my wording is off...
        $(this).attr({
            "userEnter": userEnter
        });
        // call the div from html to print
        $(".userEnter").text(userEnter);
    
        // if at any pt the users score matches the tallied score 
        // alert win win
            if (userEnter === totalScore) {
                allIDoIsWin();
            } 
            // but if it goes over then 
            else if (userEnter > totalScore) {
                sucksToLose();
            }
    })
    
    // imageFour
    $(".imageCuat").click(function() {
         // once clicked we want the score it was assigned 
        // to be added to the users score
        userEnter += imgCuat;
        // then i want this clicked value to be pushed onto the area 
        // of which the user score is at? my wording is off...
        $(this).attr({
            "userEnter": userEnter
        });
        // call the div from html to print
        $(".userEnter").text(userEnter);
    
        // if at any pt the users score matches the tallied score 
        // alert win win
            if (userEnter === totalScore) {
                allIDoIsWin();
            } 
            // but if it goes over then 
            else if (userEnter > totalScore) {
                sucksToLose();
            }
    });
    
    gameStart();

});
    






