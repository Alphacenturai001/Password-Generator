// Assignment code here
var charSelect = function(){
    
    // Include Lowercase Characters
    var charLower = confirm('Would you like to include lowercase characters?');

    if(!charLower) {
      charLower = "";
    } else {
      charLower = "abcdefghijklmnopqrstuvwxyz";
    }
    
    // Include Uppercase Characters
    var charUpper = confirm('Would you like to include uppercase characters?');

    if(!charUpper) {
      charUpper = "";
    } else {
      charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    // Include numeric Characters
    var charNum = confirm('Would you like to include numbers?');

    if(!charNum) {
      charNum = "";
    } else {
      charNum = "0123456789" ;
    }

    // Include Special Characters
    var charSpec = confirm('would you like to incldue special characters?');

    if(!charSpec) {
      charSpec = "";
    } else {
      charSpec = "!@#$%&*+";
    }

    // Link all character types together to Define passWord
    var passWord = charLower + charUpper + charNum + charSpec


    // Validates that at least one character type is selected
    if(passWord.length > 0) {
      console.log ("Password string is" + passWord );
      return passWord;
    } else {
      window.alert("Please choose at least one type of character.");
      return charSelect();
    }

}


var generatePassword = function() {

    // Set Char Length
    var charLength = prompt('How long would you like the password to be? Please enter a number between 8 and 128.');
       charLength = parseInt(charLength);
       console.log('Character length is' + charLength);
      
    if (isNaN(charLength) || charLength < 8 || charLength > 128 ){
      return generatePassword();
    }
    // Generate Password based on the users selected criteria
    var charSet = charSelect();
    var retPassword ="";

    for (var i = 0, n = charSet.length; i < charLength; i++) {
      retPassword += charSet[Math.floor(Math.random() * n)];
    }
    console.log("Generated Password is" + retPassword);
    return retPassword;
}
    


  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
