
$(document).ready(function(){
  
  var wins = null;
  var losses = null;
  var targetNumber = Math.floor(Math.random() * 201);
  var currentTotalScore = 0;

  $("#number-to-guess").text(targetNumber);
  $("#wins").text(wins);
  $("#losses").text(losses);

  var counter = 0;
  var crystalArray = ["assets/images/crystal1.jpg", "assets/images/crystal4.jpeg", "https://thumbs.gfycat.com/BowedJadedAmericanavocet-size_restricted.gif", "assets/images/crystal3.jpeg"];
  $("button").on("click", function() {
  resetGame()
});

  function resetGame() {
    
        $("#current-score").empty();
        currentTotalScore = 0;
        targetNumber = Math.floor(Math.random() * 201);
        $("#crystals").empty()
        $("#number-to-guess").text(targetNumber);
        gameLoad();
      }

  function gameLoad() {
    
    for (var i = 0; i < crystalArray.length; i++) {

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image"); 
    imageCrystal.attr("src", crystalArray[i]);
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 50), +1);
    $("#crystals").append(imageCrystal);
    }  


    $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currentTotalScore += crystalValue;
    console.log(crystalValue);
    $("#current-score").text(currentTotalScore);
     
    alert("New score: " + currentTotalScore);

    if (currentTotalScore === targetNumber) {
      alert("You win!");
      wins++
      $("#wins").text(wins);
      resetGame();
    }

    else if (currentTotalScore >= targetNumber) {
      alert("You lose!!");
      losses++
      $("#losses").text(losses);
      resetGame();
    }
    
    });

  } 
});