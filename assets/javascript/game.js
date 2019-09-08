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

    //Function to initate random number generation on page load//
    $(function()
    {
        console.log("init");

        //random number generation for number that needs to be hit//
        numberToWin = numberToStart(19, 121);
        console.log(numberToWin);
        $("#randomNum").html(numberToWin);
        crystalValuesDupeCheck()

    });

    //**FUNCTION SECTION**//
    
    //function for generating random number user needs to hit to win//
    function numberToStart(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //function for generation random numbers for crystals//
    function crystalValues(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //random number generation for all crystal values. placed in while loop so no duplicate values are appear.//
    function crystalValuesDupeCheck()
    {
        while(isRepeated)
        {
            isRepeated = false;
            redCrystal = crystalValues(1, 13);
            console.log(redCrystal);
            $("#redCrystal").html(redCrystal + " Red Crystal");
    
            blueCrystal = crystalValues(1, 13);
            console.log(blueCrystal);
            $("#blueCrystal").html(blueCrystal + " Blue Crystal");
    
            yellowCrystal = crystalValues(1, 13);
            console.log(yellowCrystal);
            $("#yellowCrystal").html(yellowCrystal + " Yellow Crystal");
    
            greenCrystal = crystalValues(1, 13);
            console.log(greenCrystal);
            $("#greenCrystal").html(greenCrystal + " Green Crystal");
    
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
});