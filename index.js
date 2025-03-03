// Getting input via STDIN
const readline = require("readline");
const { sumOfArr } = require("./Session - 4");
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

  // console.log(userInput);

  const sizeOfArr = Number(userInput[0]);
  const arr = userInput[1].split(" ").map(Number);
  const total = sumOfArr(arr);
  console.log(total);
  console.log(arr.reduce((acc, curr) => acc + curr, 0));
  //end-here
});

// type input.txt | node index.js

// [
//   "10", => size
//   "5 7 8 12 43 12 54 93 23 45" => array elements
// ];

// string => Number, Array of numbers
