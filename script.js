// Assignment Code
var generateBtn = document.querySelector("#generate");

/* MY CODE */


/* return a random integer ranging from min to max */
function randomInt(min, max) {

  /* if 'max' is not defined, assume we want range from 0 to min */
  if (!max) {
    max = min
    min = 0
  }

  /* interpolate random value */
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)

}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

/* Took the value from the starter code (line 96) and made a function to generate a password */
function generatePassword() {

  var userInput = window.prompt("How long do you want your password?")

  /* convert it into an integer */
  var passwordLength = parseInt(userInput)

  /* if the end user types a letter instead of a number he'll receive an alert message */
  if (isNaN(passwordLength)) {

    alert("That is not a number dude!")
    return
  }


  /* if statement used to determine that password length must be between 8 and 128 characters */
  if (passwordLength < 8 || passwordLength > 128) {

    alert("Password length must be between 8 and 128 characters")
    return
  }
     /* The prompt messages that will appear asking you what characters you'd like for your password */
    var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
    var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
    var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
    var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

     /* Arrays that contain the characters for your password once you generate it */
    var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var symbolList = ["$", "*", "@", "^", "!", "#", "%", "&"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var optionsCart = []

    /* these "if statements" will push the list that corresponds with if the end user says yes to the type of characters he wants for his password */
    if (userWantsNumbers === true) {
      optionsCart.push(numberList)
    }

    if (userWantsSymbols === true) {
      optionsCart.push(symbolList)
    }

    if (userWantsLowercase === true) {
      optionsCart.push(lowercaseList)
    }

    if (userWantsUppercase === true) {
      optionsCart.push(uppercaseList)
    }
    
    /* if the end user doesn't want symbols, numbers or uppercase in his password then it will generate lowercase letters only */
    if (optionsCart.length === 0) {
      optionsCart.push(lowercaseList)
    }

    var generatePassword = ""

    for (var i = 0; i < passwordLength; i++) {
       var randomList = getRandomItem(optionsCart)
       var randomChar = getRandomItem(randomList)
       generatePassword += randomChar
    }
    return generatePassword
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
