// Assignment Code
var generateBtn = document.querySelector("#generate");

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
// }

function randomInterger(num) {
  const randomNumber = Math.floor(Math.random() * num) + 1;
// figuring out how the functions tie together
  console.log(randomNumber, 'randomW');
  return Math.floor(Math.random() * num) + 1;
}

function randomUpperCase() {
// figuring out how the functions tie together
  console.log('randomX');
  var lettersBig = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"]
  var index = randomInterger(lettersBig.length - 1)
  return lettersBig[index]
}

function randomLowerCase() {
// figuring out how the functions tie together
  console.log('randomY');
  var lettersSmall = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"]
  var index = randomInterger(lettersSmall.length - 1)
  return lettersSmall[index]
}

function randomSpecial() {
// figuring out how the functions tie together
  console.log('randomZ');
  var special = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^"
    ]
  var index = randomInterger(special.length - 1)
  return special[index]
}

// randomInterger(128)
// randomUpperCase()
// randomLowerCase()
// randomSpecial()

// function generatePassword()

// Write password to the #password input
function writePassword() {
  randomInterger(128);
  randomUpperCase();
  randomLowerCase();
  randomSpecial();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Length
//Capital Letters
//Numbers
//Special Characters
//guaranteed characters array
                            



