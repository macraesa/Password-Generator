// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // array that list all options
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var passWord = []
  
  
  // variables that prompt a password length and confirm characters
  var passwordLength = parseInt(prompt("Length?"));
  var wantsSpecials = confirm("Specials?");
  var wantsLowers = confirm("Lowers?");
  var wantsUppers = confirm("Uppers?");
  var wantsNumbers = confirm("Numbers?")

  console.log(possibles);

  var possibles = []

  if (wantsSpecials) {
      possibles.push(specials);
  }

  if (wantsLowers) {
      possibles.push(lowers);
  }

  if (wantsUppers) {
      possibles.push(uppers);
  }

  if (wantsNumbers) {
      possibles.push(numbers);
  }
  
  console.log(possibles);
  
  var result = "";

  for (var i = 0; i < passwordLength; i++) {
      // randomly pick an array from possibles
      var randomArray = 
          possibles[Math.floor(Math.random() * possibles.length)];
      // randomly pick a character from the array we picked above
      var randomChar = 
          randomArray[Math.floor(Math.random() * randomArray.length)];
      // add the character to the password
      result += randomChar;
  }
 
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




