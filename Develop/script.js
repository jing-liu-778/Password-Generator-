// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){
  
  // ask user to choose length of password
  var passwordLength = window.prompt("Choose length of password (at least 8 characters and no more than 128 characters). ");
  
// confirm whether include lowercase, uppercase, number, symbol
  var isLowercaseInclude = window.confirm("Whether include lowercase?");
  var isUppercaseInclude = window.confirm("Whether include uppercase?");
  var isNumberInclude = window.confirm("Whether include number?");
  var isSymbolInclude = window.confirm("Whether include symbol?");
  
// create different type of password
  var keys ={
  lowercase : "abcdefghijklmnopqrstuvwxyz",
  uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number : "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{][:;<>,.?/-=",
}
  if (isLowercaseInclude+isUppercaseInclude+isNumberInclude+isSymbolInclude===0){
    alert("Please comfirm at least one type of character.");
    return;
  }

  // decide final password string
  var passwordString ="";
  if (isLowercaseInclude){
    passwordString += keys.lowercase;

  }
  if (isUppercaseInclude){
    passwordString += keys.uppercase;
  }
  if (isNumberInclude){
    passwordString += keys.number;
  }
  if(isSymbolInclude){
    passwordString += keys.symbol;
  }
  
  // console.log(typeof(passwordString))
 
  // generate password
  let password = "";
  for(i=0;i<passwordLength;i++){
    password += passwordString[Math.floor(Math.random()*passwordString.length)]+" ";
   
  
  }
  console.log(password);
  return password;
  

}
// generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 