// Assignment Code
var generateBtn = document.querySelector("#generate");

/* MY CODE */

function generatePassword() {

  var userInput = window.prompt("How long do you want your password?")
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {

    alert("That is not a number dude!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {

    alert("Password length must be between 8 and 128 characters")
    return
  }



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
