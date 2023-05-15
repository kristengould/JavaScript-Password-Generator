// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberList = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
var specialCharacterList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Begin generate password function.
function generatePassword() {
// Prompts users to enter a number for length of password.
  var passwordLength = prompt(
    "How many characters would you like your password to be? (Must be 8 - 128 characters in length.)"
  );
// Alert if user enters number outside of 8 - 128 range.
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Please try again, password length must be between 8 - 128 characters in length.");
    return "Please try again!";
// Alert if user enters non-number value.
  } else if (isNaN(passwordLength) === true) {
    alert ("Please pick a number!")
    return "Please try again!";
// Continue with prompts once user enters valid number.
  } else {
  var containsSpecialCharacters = confirm("Do you want special characters in your password?");
  var containsNumbers = confirm("Do you want numbers in your password?");
  var containsUpperCase = confirm("Do you want uppercase letters in your password?");
  var containsLowerCase = confirm("Do you want lowercase letters in your password?");
  };
 
  var possibleCharacters = [];
// If all four prompts return false:
  if (!containsSpecialCharacters && !containsNumbers && !containsUpperCase && !containsLowerCase) {
    alert ("Please choose a criteria!")
    return "Please choose at lease one criteria!"
  }
// If all four prompts return true:
  else if (containsSpecialCharacters && containsNumbers && containsUpperCase && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(upperCaseList, lowerCaseList, numberList);
  }
// If three prompts return true:
  else if (containsSpecialCharacters && containsNumbers && containsUpperCase) {
    possibleCharacters = specialCharacterList.concat(numberList, upperCaseList);
  }
  else if (containsSpecialCharacters && containsNumbers && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(numberList, lowerCaseList);
  }
  else if (containsSpecialCharacters && containsUpperCase && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(upperCaseList, lowerCaseList);
  }
  else if (containsUpperCase && containsLowerCase && containsNumbers) {
    possibleCharacters = upperCaseList.concat(lowerCaseList, numberList);
  }
// If two prompts return true:
  else if (containsSpecialCharacters && containsNumbers) {
    possibleCharacters = specialCharacterList.concat(numberList);
  }
  else if (containsSpecialCharacters && containsUpperCase) {
    possibleCharacters = specialCharacterList.concat(upperCaseList);
  }
  else if (containsSpecialCharacters && containsLowerCase) {
    possibleCharacters = specialCharacterList.concat(lowerCaseList);
  }
  else if (containsNumbers && containsUpperCase) {
    possibleCharacters = numberList.concat(upperCaseList);
  }
  else if (containsNumbers && containsLowerCase) {
    possibleCharacters = numberList.concat(lowerCaseList);
  }
  else if (containsUpperCase && containsLowerCase) {
    possibleCharacters = upperCaseList.concat(lowerCaseList);
  }
// If one prompt returns true:
  else if (containsSpecialCharacters) {
    possibleCharacters = specialCharacterList;
  }
  else if (containsUpperCase) {
    possibleCharacters = upperCaseList;
  }
  else if (containsLowerCase) {
    possibleCharacters = lowerCaseList;
  }
  else if (containsNumbers) {
    possibleCharacters = numberList;
  }
  console.log(possibleCharacters)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
