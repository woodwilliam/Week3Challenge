// Assignment Code
// arry containg all charitcter value possibilities sorted by type
const specChar = ["!","@","#","$","%","^","&","*","(",")",];
const numb = ["0","1","2","3","4","5","6","7","8","9"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// assign variables to html document using id tags
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword(){
  let passwordBasket = [];
  let password = "";
  let numbersQ = confirm("y4ll w4nt s0me numb3rs?");
  let lowerQuase = confirm("yall wawnt that lowa case?");
  let upperQuase = confirm("YALL WANTT THAT UPPERCASE?");
  let symbolsQ = confirm("would you like @ $pec!@l char!cter?!?!?!");
  let lengthy = prompt("what that length gone be bruh?");
  // the passwordBasket array is filled with each charicter types selected from confirm/propmpt
  // using contitional rernary operator
  numbersQ ? passwordBasket.push(...numb) : passwordBasket;
  lowerQuase ? passwordBasket.push(...lowercase) : passwordBasket;
  upperQuase ? passwordBasket.push(...uppercase) : passwordBasket;
  symbolsQ ? passwordBasket.push(...specChar) : passwordBasket;

//  Randomly pulls items from passwordBasket array using a for loop
  for (let i = 0; i <= lengthy -1; i++) {
    let randyRando = Math.floor(Math.random() * passwordBasket.length);
    password += passwordBasket.slice(randyRando, randyRando +1);
  };
  //assign variable passwordText with the value of the variable password
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
