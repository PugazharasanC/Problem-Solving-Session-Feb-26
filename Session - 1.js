//? Day 1: Problem Statements & Systematic Approaches
//* Session Focus: Interpreting problem statements, breaking down problems systematically.
//? Session Practice Questions:
//! Determine if a number is positive or negative.
function isPositive(num) {
  if (num > 0) {
    return "Positive";
  } else if (num == 0) {
    return "Zero";
  } else {
    return "Negative";
  }
}
//! Find the sum of two integers.
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}
//! Identify the maximum, middle and minimum of three numbers.
function max(num1, num2) {
  return num1 < num2 ? num2 : num1;
}
function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
function maxMiddleMin(num1, num2, num3) {
  let maximum = max(max(num1, num2), num3);
  let minimum = min(min(num1, num2), num3);
  let middle = num1 + num2 + num3 - maximum - minimum;

  return [maximum, middle, minimum];
}

// console.log(maxMiddleMin(1, 2, 3));
// console.log(maxMiddleMin(3, 2, 1));
// console.log(maxMiddleMin(2, 3, 1));
// console.log(maxMiddleMin(2, 1, 3));
// console.log(maxMiddleMin(1, 3, 2));
// console.log(maxMiddleMin(3, 1, 2));
//! Count the number of digits in a number.
function countDigits(num) {
  if (num == 0) return 1;
  if (num < 0) return countDigits(-num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

//! Check if a string contains only alphabets.
// function isAlphabetOnly(str) {
//   let regex = /^[a-zA-Z]+$/;
//   return regex.test(str);
// }
function isAlphabetOnly(str) {
    if(str.length == 0) return false
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122)
    ) {
      return false;
    }
  }
  return true;
}

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log("A".charCodeAt(0));
// console.log("Z".charCodeAt(0));
//! Calculate the area of a circle with a given radius.
function areaOfCircle(rad) {
  return ((22 / 7) * rad * rad).toFixed(2);
}
//! Check if a character is a vowel.
function isVowel(char) {
  // return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'
  return "aeiouAEIOU".indexOf(char) !== -1;
}

module.exports = {
  isPositive,
  sumOfTwoNumbers,
  maxMiddleMin,
  countDigits,
  isAlphabetOnly,
  areaOfCircle,
  isVowel,
};
// todo Post-Session Practice Questions:
// todo Calculate the difference between two integers.
// todo Check if a number is even or odd.
// todo Calculate the perimeter of a rectangle.
// todo Find the largest of four numbers.
// todo Calculate the average of three numbers.
// todo Count the number of vowels in a string.
// todo Determine if a character is uppercase.
// todo Print the reverse of a string.
// todo Find the square of a number.
