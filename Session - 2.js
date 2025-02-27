// function swap(num1, num2) {
//   console.log(num1, num2);
//   let temp = num1;
//   num1 = num2;
//   num2 = temp;
//   console.log(num1, num2);
// }

// function swap(num1, num2) {
//     num1 = num1 + num2;
//     num2 = num1 - num2;
//     num1 = num1 - num2;
//     console.log(num1, num2);
// }

// function swap(num1, num2) {
//     num1 = num1 ^ num2;
//     num2 = num1 ^ num2;
//     num1 = num1 ^ num2;
//     console.log(num1, num2);
// }

// function swap(num1, num2) {
//     [num1, num2] = [num2, num1];
//     console.log(num1, num2)
// }
// function swap(num1, num2) {
//     console.log(num1, num2)
//     num1 = num1 + num2 - (num2 = num1);
//     console.log(num1, num2)
// }

// swap(10, 15);
// swapWithoutTemp(10, 15)

//? Day 2: Maths & Pattern Creation
//* Session Focus: Solving fundamental math problems and creating patterns.
//? Session Practice Questions:
//! Sum of digits in a number.
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
// console.log(sumOfDigits(1372))
//! Calculate the factorial of a number.
function fact(num) {
  // 5 => 5 * 4 * 3 * 2 * 1 = 120
  if (num == 0) return 1;
  let factorial = 1;
  for (let val = num; val > 0; val--) {
    factorial = val * factorial;
  }
  return factorial;
}

// console.log(fact(5));
//! Generate the Fibonacci sequence up to N terms.(Space Complexity)
// 0 1 1 2 3 5 8 13 21 34 55 89
function fibonacci(n) {
  //   let sequence = [0, 1];
  let x = 0;
  let y = 1;
  if (n < 1) return;
  if (n < 2) {
    console.log(0);
    return;
  }
  if (n < 3) {
    console.log(0);
    console.log(1);
    return;
  }
  for (let ind = 0; ind < n; ind++) {
    console.log(x);
    x = x + y;
    y = x - y;
  }
}
// for (let i = 0; i < 100; i++)
// console.log(...fibonacci(10));
//! Check if a number is prime. (Time Complexity)
function isPrime(num) {
  if (num < 2) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  //   let x = num / 2;
  //   for (let factor = 2; factor < num; factor++) {
  //   for (let factor = 2; factor < num/2; factor++) {
  //   for (let factor = 2; factor * factor <= num; factor++) {
  for (let factor = 3; factor * factor <= num; factor += 2) {
    if (num % factor == 0) return [factor, false];
  }
  return true;
}
console.time("isPrime");
const x = isPrime(1057438801);
console.timeEnd("isPrime");
console.log(x);
//! Print a hollow square pattern.
//! Print a right-angled triangle pattern of asterisks.

module.exports = { sumOfDigits };
// todo Post-Session Practice Questions:
// todo Find the LCM of two numbers.
// todo Generate a pyramid pattern of numbers.
// todo Calculate the GCD of two numbers.
// todo Check if a number is a palindrome.
// todo Print an inverted triangle pattern of stars.
// todo Check if two numbers are coprime.
// todo Print a diamond pattern of stars.
// todo Print Pascal’s triangle up to N rows.
// todo Find all divisors of a number.
// todo Print a checkerboard pattern.
