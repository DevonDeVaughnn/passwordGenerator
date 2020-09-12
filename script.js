// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var input;
var conNum;
var conSpec;
var conLow;
var conUp;

//Array for Special Characters
specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Array for numbers 
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Array for alphabets
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//To concatenate upon chosen conditions
var param;

//For uppercase conversion
spaace=[];

//Converts letters to uppercase
var makeUpper = function (a){
  return a.toUpperCase();
};

//The variable for uppercase
bigLett = letters.map(makeUpper);
var get = document.querySelector("#generate");






function generatePassword(){
  //Asks for the input
  input = prompt("How long would you like this password? It must be between 8 and 128 characters.");
  // Fist validation
   if (!input){
    alert("Please enter an actual value.");
   }
   //Once that passes, make sure it fits parameters. If it doesn't, alert them.
    else if (input < 8 || input > 128){
    alert("Your password must be between 8 and 128 characters");
      return;
    }
    //Since it passes we move on to confirm the other parameters
    else{
      conUp = confirm("Would you like uppercase?");  
      conLow = confirm("Would you like lowercase?");
      conNum = confirm("Would you like numbers?")
      conSpec = confirm("Would you like special characters?");
  };
  // If statements for the parameters (found .concat through google-fu, changed my life)
  if (!conSpec && !conNum && !conUp && !conLow) {
    choices = alert("You must choose a criteria!");
  }

  else if(conSpec && conNum && conLow && conUp){
    param = specChar.concat(number, letters, bigLett);
  }

  //For 3 choices
  else if(conSpec &&conNum && conLow){
    param = specChar.concat(number, letters)
  }
  else if(conSpec && conLow && conUp){
    param = specChar.concat(letters, bigLett)
  }
  else if(conSpec &&conNum && conUp){
    param = specChar.concat(number, bigLett)
  }
  else if(conNum && conLow && conUp ){
    param = number.concat(letters, bigLett)
  }

  
  //For 2 choices  
  else if(conSpec && conNum){
    param = specChar.concat(number)
  }
  else if(conSpec && conUp){
    param = specChar.concat(bigLett)
  }
  else if(conSpec && conLow){
    param = specChar.concat(letters)
  }
  else if(conUp && conLow){
    param = bigLett.concat(letters)
  }
  else if(conUp && conNum){
    aram = bigLett.concat(number)
  }
  else if(conLow && conNum){
    param = letter.concat(number)
  }

  //For 1 choice
  else if(conLow){
    param = letters;
  }
  else if(conNum){
    param = number;
  }
  else if(conUp){
    param = bigLett;
  }
  else if(conSpec){
    param = specChar;
  }


// space variable to fill uppercase conversion
  else if (conUp) {
    param = space.concat(bigLett);
};

//create an array to hold final passwords
var password = [];

//Picking random vaariables based off of parameters
for (var i = 0; i < input; i++){
  var choices = param[Math.floor(Math.random() * param.length)];
  password.push(choices);
  
}

//Join password array and turns it into string. 
var pswd = password.join("");
UserInput(pswd);
return pswd;
}

//Places generated password into textbox
function UserInput(pswd){
  document.querySelector("#password").textContent = pswd;
}


generateBtn.addEventListener("click", writePassword);
