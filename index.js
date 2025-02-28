// Getting input via STDIN
const readline = require("readline");
// const {
//   isPositive,
//   sumOfTwoNumbers,
//   maxMiddleMin,
//   countDigits,
//   isAlphabetOnly,
//   areaOfCircle,
//   isVowel,
// } = require("./Session - 1");
const { sumOfDigits } = require("./Session - 2");
const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  let val = +userInput[0];
  console.log(sumOfDigits(val));

  //end-here
});


// type input.txt | node index.js