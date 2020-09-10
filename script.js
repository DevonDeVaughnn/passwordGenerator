// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var number = []
for (var i = 0; charLength.length; i++)
function generatePassword();
//TODO: Create generatePassword function that returns password. all code should live here
// TODO: create prompts to ask length of the password, save it as a VAR
//TODO: Create confirm that asks if they want lower, upper, numeric and/or special
//TODO: Length should be no more than 128 char, and no less than 8 char
//TODO: add validations to make sure atleast one type of char is selected
//TODO: After prompt is done, password should create
//TODO: Create arrays that have all numbers, all upper, all special, all lower case
//TODO: Create new var that holds all the chosen char
//TODO: create an if statement that savves the chosen char from our confirms, to a new collection
//TODO: Select specific numvber of char randomly from our final collection based off of the users answer to how long the length of the password
//I can use Math.floor(Math.random()) to get random number
//for loop to the length of the selected char var (for var = i=0; i=< "charLength prompt"; i++){logic goes here}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
