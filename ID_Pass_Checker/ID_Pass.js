// Original ID & Password Checker
//
// function passCheck(id, password) {
//   if ((id === password) || (id.length < 6)) {
//       console.log("first")
//       return false
//   } else if (password.length < 6) {
//       console.log("second")
//       return false
//   } else if ((id.includes("!")) || (id.includes("#")) || (id.includes("$"))) {
//       console.log("third")
//       return false
//   } else if (!((password.includes("!")) || (password.includes("#")) || (password.includes("$")))) {
//       console.log("fourth")
//       return false
//   } else if (password === "password") {
//       console.log("fifth")
//       return false
//   } else
//       return true
// }
//
// passCheck("abhhcd", "#abcdef");

// New ID & Password Checker
$(document).ready(function(){

  $("#userID").before("<h4>User ID</h4>");
  $("#password").before("<h4>Password</h4>");

  var id;
  var password;
  $("#actBut").on("click", function(){
    id = $("#userID").val();
    password = $("#password").val();
      if ((id === password) || (id.length < 6)) {
          $("#output").text("Invalid username or password");
          $("#userID").val("");
          $("#password").val("");
          console.log("first");
      } else if (password.length < 6) {
        $("#output").text("Invalid password length");
        $("#userID").val("");
        $("#password").val("");
          console.log("second")
      } else if ((id.includes("!")) || (id.includes("#")) || (id.includes("$"))) {
        $("#output").text("Invalid - User ID should not include  one of the following characters: !, #, $");
        $("#userID").val("");
        $("#password").val("");
          console.log("third")
      } else if (!((password.includes("!")) || (password.includes("#")) || (password.includes("$")))) {
        $("#output").text("Invalid - Password should include one of the following characters: !, #, $");
        $("#userID").val("");
        $("#password").val("");
          console.log("fourth")
      } else if (password === "password") {
        $("#output").text("Invalid - Password cannot be 'password'");
        $("#userID").val("");
        $("#password").val("");
          console.log("fifth")
      } else {
        $("#output").text("Account successfully created");
      }
  });
});

// passCheck("abhhcd", "#abcdef");
