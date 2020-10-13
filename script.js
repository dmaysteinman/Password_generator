// Assignment Code
// var inquirer = require('inquirer');

var generateBtn = document.querySelector("#generate");

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
// }

function randomInterger(num) {
  const randomNumber = Math.floor(Math.random() * num) + 1;
// figuring out how the functions tie together
  // console.log(randomNumber, 'randomW');
  return Math.floor(Math.random() * num) + 1;
}

function randomUpperCase() {
// figuring out how the functions tie together
  // console.log('randomX');
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
  // console.log('randomY');
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
  // console.log('randomZ');
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


  for(var i = 0; i < length; i++){
    console.log(funcArr[randomInterger(funcArr.length - 1)])
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);

// 

function promptUser () {
  var length = prompt("How long would you like your password to be? Choose a number between 8 and 128");
if (length == null || length == "" || length<8 || length>128 || isNaN(length)) {
  var password = document.querySelector("#password");
  password.value = "ERROR: INVALID INPUT";
  return;
}

var number = confirm("Do you want numbers in your password?");
var uppercase = confirm("Do you want uppercase letters in your password?");
var lowercase = confirm("Do you want lowercase letters in your password?");
var specialchar = confirm("Do you want special characters in your password?");

// console.log(length);
// console.log(number);
// console.log(uppercase);
// console.log(lowercase);
// console.log(specialchar);

for(var i = 0; i < length; i++){
  var funcArr = [randomUpperCase(), randomLowerCase(), randomSpecial()];
  console.log(funcArr[Math.floor(Math.random() * funcArr.length)])
}

}

