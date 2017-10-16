$(document).ready(function(){
  $("#submit").on("click", (function(){
    var userInput = $(".input").val();
    console.log(userInput);
    var answerArray = ["Yes", "No", "Maybe so", "A Billion", "Try again later", "Getting warmer", "WAAAYYYY OFF!", "Absolutely", "Seriously?!?!"]
    var answer = Math.floor(Math.random()*9);
    $("#answer").text("The Magic 8 Ball says... " + answerArray[answer]);
    $(".input").val("");
  }));
});
