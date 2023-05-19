// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberList = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
var specialCharsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Begin function to obtain users' input.
function getUserInput() {
  
  // Prompts users to enter a number for length of password.
  var passwordLength = prompt(
  "How many characters would you like your password to be? (Must be 8 - 128 characters in length.)"
  );
  // Alert if user enters number outside of 8 - 128 range.
  if (passwordLength < 8 || passwordLength > 128) {
   alert ("Please try again, password length must be between 8 - 128 characters in length.");
  };
  // Alert if user enters non-number value.
  if (isNaN(passwordLength) === true) {
    alert ("Please pick a number!")
  };
  // Continue with prompts once user enters valid number.
  var containsSpecialCharacters = confirm("Do you want special characters in your password?");
  var containsNumbers = confirm("Do you want numbers in your password?");
  var containsUpperCase = confirm("Do you want uppercase letters in your password?");
  var containsLowerCase = confirm("Do you want lowercase letters in your password?");
  //If all four prompts return false:
  if (!containsSpecialCharacters && !containsNumbers && !containsUpperCase && !containsLowerCase) {
   alert ("Please choose a criteria!");
  writePassword();
  }

var userSelections = {
  length: passwordLength,
  specialChars: containsSpecialCharacters,
  upperCase: containsUpperCase,
  lowerCase: containsLowerCase,
  numbers: containsNumbers,
}

console.log(userSelections)
return userSelections;
}

// Begin generate password function.
function generatePassword() {
  var userInput = getUserInput();
  console.log(userInput);
  var password = "";
  var selectedCharacters = [];

  if (userInput.specialChars) {
    selectedCharacters = selectedCharacters.concat(specialCharsList);
  }
  if (userInput.upperCase) {
    selectedCharacters = selectedCharacters.concat(upperCaseList);
  }
  if (userInput.lowerCase) {
    selectedCharacters = selectedCharacters.concat(lowerCaseList);
  }
  if (userInput.numbers) {
   selectedCharacters = selectedCharacters.concat(numberList);
  }

  for (var i = 0; i < userInput.length; i++) {
   var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
   var randomCharacter = selectedCharacters[randomIndex];
   password = password + randomCharacter;
  }
  return password; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

