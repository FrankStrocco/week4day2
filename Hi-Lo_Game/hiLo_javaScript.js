//Javascript Game

// var num = parseInt(Math.random() * 100);
// var counter = 0;
// var name;
// function getName() {
//   name = document.getElementById("nameField").value;
//   console.log(name);
// }
// function hiLo(x) {
//   console.log(num);
//   console.log(name);
//   var guess = document.getElementById("inputField").value;
//   console.log(guess);
//   if (counter < 6 || num != guess) {
//       if (guess > num) {
//         document.getElementById("outputText").innerHTML = guess + " Too High! Guess again";
//         document.getElementById("inputField").value = "";
//         counter = counter + 1;
//       } else if (guess < num) {
//         document.getElementById("outputText").innerHTML = guess + " Too Low! Guess again";
//         document.getElementById("inputField").value = "";
//         counter = counter + 1;
//       }
//       if (counter === 6) {
//       alert("Too many guesses! You lose!");
//     }
//       if (guess == num && counter != 6) {
//       alert("You Win " + name + "!");
//     }
//   }
// }


//jQuery Game

$(document).ready(function(){
  var num = parseInt(Math.random() * 100);
  console.log(num);
  var counter = 0;
  var name;
  $("#btn1").on("click", function (){
    name = $("#nameField").val();
    $("#btn1").hide();
    console.log(name);
  });
  $("#btn2").on("click", function (){
    var guess = $("#inputField").val();

    if (counter < 6 || num != guess) {
        if (guess > num) {
          $("#outputText").text(guess + " Too High! Guess again");
          $("#inputField").val("");
          counter = counter + 1;
        } else if (guess < num) {
          $("#outputText").text(guess + " Too Low! Guess again");
          $("#inputField").val("");
          counter = counter + 1;
        }
        if (counter === 6) {
        alert("Too many guesses! You lose!");
      }
        if (guess == num && counter != 6) {
        alert("You Win, " + name + "!");
      }
    }
    console.log(counter);
  });

});

// function getName() {
//   name = document.getElementById("nameField").value;
//   console.log(name);
// }
// function hiLo(x) {
//   console.log(num);
//   console.log(name);
//   // var guess = $("#inputField").val;
//   console.log(guess);
