$(document).ready(function(){
//set up variables for game
var winNum = "";
var wins = 0;
var losses = 0;
var counter = 0;

var walt = Math.floor(Math.random() * 12) + 1;
var pinkman = Math.floor(Math.random() * 12) + 1;
var gus = Math.floor(Math.random() * 12) + 1;
var saul = Math.floor(Math.random() * 12) + 1;
var score = 0;
//create function to randomly choose winning number

function winningNum() {
  winNum = Math.floor(Math.random() * 102) + 19;
  $("#win").html("<h3>Winning Bank Roll: $" + winNum + "</h3>");
}


//create functions to randomly select value for each image

//create click events for each image


  
  $("#walt").click(function(){
    score = score + walt;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");
    
    if (score === winNum) {
      wins++;
      $("#wins").text(wins);
      reset();
    }

    else if (score > winNum) {
      losses++;
      $("#losses").text(losses);
      reset();
    }

  })

  $("#pinkman").click(function(){
    score = score + pinkman;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");

    if (score === winNum) {
      wins++;
      $("#wins").text(wins);
      reset();
    }

    else if (score > winNum) {
      losses++;
      $("#losses").text(losses);
      reset();
    }

  })

  $("#gus").click(function(){
    score = score + gus;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");

    if (score === winNum) {
      wins++;
      $("#wins").text(wins);
      reset();
    }

    else if (score > winNum) {
      losses++;
      $("#losses").text(losses);
      reset();
    }

  })

  $("#saul").click(function(){
    score = score + saul;
    $("#score").html("<h3>Your Bank Roll: $" + score + "</h3>");

    if (score === winNum) {
      wins++;
      $("#wins").text(wins);
      reset();
    }

    else if (score > winNum) {
      losses++;
      $("#losses").text(losses);
      reset();
    }

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