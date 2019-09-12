$(document).ready(function()
{
    //Declared Global Variables//
    var numberToWin = 0;
    var wins = 0;
    var losses = 0;
    var redCrystal = 0;
    var blueCrystal = 0;
    var yellowCrystal = 0;
    var greenCrystal = 0;
    var totalScore = 0;
    var isRepeated = true;

    //Function to initiate random number generation on page load//
    $(function()
    {
        console.log("init");

        //random number generation for number that needs to be hit//
        numberToWin = numberToStart(19, 121);
        console.log(numberToWin);
        $("#randomNum").html("Target Score: " + numberToWin);
        crystalValuesDupeCheck()
    });

    //code that adds crystal values to total score//
    $("#redCrystal1").on("click", function()
    {
       totalScore = totalScore + redCrystal;
       console.log(totalScore);
       $("#scoreUpdate").html("Total Score: " + totalScore);
       $("#redCrystal2").css('opacity', '1');
       setTimeout(hideNumberRed, 1000);
       checkScore();
    });

    $("#blueCrystal1").on("click", function()
    {
       totalScore = totalScore + blueCrystal;
       console.log(totalScore);
       $("#scoreUpdate").html("Total Score: " + totalScore);
       $("#blueCrystal2").css('opacity', '1');
       setTimeout(hideNumberBlue, 1000);
       checkScore();
    });

    $("#yellowCrystal1").on("click", function()
    {
       totalScore = totalScore + yellowCrystal;
       console.log(totalScore);
       $("#scoreUpdate").html("Total Score: " + totalScore);
       $("#yellowCrystal2").css('opacity', '1');
       setTimeout(hideNumberYellow, 1000);
       checkScore();
    });

    $("#greenCrystal1").on("click", function()
    {
       totalScore = totalScore + greenCrystal;
       console.log(totalScore);
       $("#scoreUpdate").html("Total Score: " + totalScore);
       $("#greenCrystal2").css('opacity', '1');
       setTimeout(hideNumberGreen, 1000);
       checkScore();
    });

    //**FUNCTION SECTION**//

    //function for generating random number user needs to hit to win//
    function numberToStart(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //function for generating random numbers for crystals
    function crystalValues(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //random number generation for all crystal values. placed in while loop so no duplicate values appear.
    function crystalValuesDupeCheck()
    {
        while(isRepeated)
        {
            isRepeated = false;

            redCrystal = crystalValues(1, 13);
            console.log(redCrystal);
            $("#redCrystal2").html(redCrystal);
            $("#redCrystal2").css('opacity', '0');
    
            blueCrystal = crystalValues(1, 13);
            console.log(blueCrystal);
            $("#blueCrystal2").html(blueCrystal);
            $("#blueCrystal2").css('opacity', '0');
    
            yellowCrystal = crystalValues(1, 13);
            console.log(yellowCrystal);
            $("#yellowCrystal2").html(yellowCrystal);
            $("#yellowCrystal2").css('opacity', '0');
    
            greenCrystal = crystalValues(1, 13);
            console.log(greenCrystal);
            $("#greenCrystal2").html(greenCrystal);
            $("#greenCrystal2").css('opacity', '0');
    
            if(redCrystal === blueCrystal || redCrystal === greenCrystal || redCrystal === yellowCrystal)
            {
                isRepeated = true;
                console.log("Duplicate1")
            }
                
            if(blueCrystal === yellowCrystal || blueCrystal === greenCrystal)
            {
                isRepeated = true;
                console.log("Duplicate2") 
            }
    
            if(yellowCrystal === greenCrystal)
            {
                isRepeated = true;
                console.log("Duplicate3") 
            }
        }
    }

    //function to check the score on each button click, track wins/losses, and reset the game depending on what happened
    function checkScore()
    {
        if(totalScore === numberToWin)
        {
            wins++;
            console.log("Wins " + wins + ", Losses " + losses);
            $("#win").html("Wins: " + wins);
            numberToWin = numberToStart(19, 121);
            console.log(numberToWin);
            $("#randomNum").html("Target Score: " + numberToWin);
            crystalValuesDupeCheck();
            totalScore = 0;
            $("#scoreUpdate").html("Total Score: " + 0);
        }

        else if(totalScore > numberToWin)
        {
            losses++
            console.log("Wins " + wins + ", Losses " + losses);
            $("#loss").html("losses: " + losses);
            numberToWin = numberToStart(19, 121);
            console.log(numberToWin);
            $("#randomNum").html("Target Score: " + numberToWin);
            crystalValuesDupeCheck();
            totalScore = 0;
            $("#scoreUpdate").html("Total Score: " + 0);
        }
    }

    //functions for setTimeout to hide crystal values after certain amount of time.
    function hideNumberRed()
    {
        $("#redCrystal2").css('opacity', '0');
    }

    function hideNumberBlue()
    {
        $("#blueCrystal2").css('opacity', '0');
    }

    function hideNumberYellow()
    {
        $("#yellowCrystal2").css('opacity', '0');
    }

    function hideNumberGreen()
    {
        $("#greenCrystal2").css('opacity', '0');
    }
});