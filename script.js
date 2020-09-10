// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword();
//TODO: Create generatePassword function that returns password. all code should live here
// TODO: create prompts to ask length of the password, save it as a VAR
//TODO: Create confirm that asks if they want lower, upper, numeric and/or special
//TODO: Length should be no more than 128 char, and no less than 8 char
//TODO: add validations to make sure atleast one type of char is selected
//TODO: After prompt is done, password should create
//TODO: Create arrays that have all numbers, all upper, all special, all lower case
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
