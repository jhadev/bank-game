$(document).ready(function () {
  //set up variables for game
  var winNum = "";
  var wins = 0;
  var losses = -1;
  var walt = Math.floor(Math.random() * 12) + 1;
  var pinkman = Math.floor(Math.random() * 12) + 1;
  var gus = Math.floor(Math.random() * 12) + 1;
  var saul = Math.floor(Math.random() * 12) + 1;
  var score = 0;
  //create function to randomly choose winning number

  function winningNum() {
    winNum = Math.floor(Math.random() * 102) + 19;
    $("#win").html("<h3>Winning Bank Roll: $</h3>" + winNum + "</h3>");
  }

	function game() {  
	
	if (score === winNum) {
		wins++;
		$("#wins").html("<h3>Wins: " + wins + "</h3>");
		reset();
	} 
	
	else if (score > winNum) {
		losses++;
		$("#losses").html("<h3>Losses: " + losses + "</h3>");
		reset();
	}
} 
  //create click events for each image



  $("#walt").click(function(game) {
    score = score + walt;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");

  })

  $("#pinkman").click(function(game) {
    score = score + pinkman;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");

  })

  $("#gus").click(function (game) {
    score = score + gus;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");

  })

  $("#saul").click(function(game) {
    score = score + saul;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");


  })


  //reset function
  function reset() {
    winNum = Math.floor(Math.random() * 102) + 19;
    $("#win").html("<h3>Winning Bank Roll: $" + winNum + "</h3>");
    score = 0;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");
    walt = Math.floor(Math.random() * 12) + 1;
    pinkman = Math.floor(Math.random() * 12) + 1;
    gus = Math.floor(Math.random() * 12) + 1;
    saul = Math.floor(Math.random() * 12) + 1;
  }

})