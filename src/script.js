// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacters = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","+"];
var passwordLength;
var containsSpecialCharacters;
var containsNumbers;
var containsUpperCase;
var containsLowerCase;

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
  alert ("Please choose a criteria!")
  return "Please choose at lease one criteria!";
}
}

// Begin generate password function.
function generatePassword() {
  var userInput = getUserInput();
  var password = "";
  var selectedCharacters = [];

if (userInput.containsSpecialCharacters === true) {
    selectedCharacters = selectedCharacters.push(specialCharsList);
}
if (userInput.containsNumbers === true) {
  selectedCharacters = selectedCharacters.push(numberList);
}
if (userInput.containsUpperCase === true) {
  selectedCharacters = selectedCharacters.push(upperCaseList);
}
if (userInput.containsLowerCase === true) {
  selectedCharacters = selectedCharacters.push(lowerCaseList);
}

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
  password += selectedCharacters.charAt(randomIndex);
}
return password;

/* If all four prompts return true:
  if (containsSpecialCharacters && containsNumbers && containsUpperCase && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(upperCaseList, lowerCaseList, numberList);
  }
// If three prompts return true:
  if (containsSpecialCharacters && containsNumbers && containsUpperCase) {
    possibleCharacters = specialCharacterList.concat(numberList, upperCaseList);
  }
  if (containsSpecialCharacters && containsNumbers && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(numberList, lowerCaseList);
  }
  if (containsSpecialCharacters && containsUpperCase && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(upperCaseList, lowerCaseList);
  }
  if (containsUpperCase && containsLowerCase && containsNumbers) {
    possibleCharacters = upperCaseList.concat(lowerCaseList, numberList);
  }
// If two prompts return true:
  if (containsSpecialCharacters && containsNumbers) {
    possibleCharacters = specialCharacterList.concat(numberList);
  }
  if (containsSpecialCharacters && containsUpperCase) {
    possibleCharacters = specialCharacterList.concat(upperCaseList);
  }
  if (containsSpecialCharacters && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(lowerCaseList);
  }
  if (containsNumbers && containsUpperCase) {
    possibleCharacters = numberList.concat(upperCaseList);
  }
  if (containsNumbers && containsLowerCase) {
    possibleCharacters = numberList.concat(lowerCaseList);
  }
  if (containsUpperCase && containsLowerCase) {
    possibleCharacters = upperCaseList.concat(lowerCaseList);
  }
// If one prompt returns true:
  if (containsSpecialCharacters) {
    possibleCharacters = specialCharacterList;
  }
  if (containsUpperCase) {
    possibleCharacters = upperCaseList;
  }
  if (containsLowerCase) {
    possibleCharacters = lowerCaseList;
  }
  if (containsNumbers) {
    possibleCharacters = numberList;
  }*/

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

