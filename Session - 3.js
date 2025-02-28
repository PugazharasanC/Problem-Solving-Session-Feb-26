//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.
//? Session Practice Questions:
//! Reverse a string.
function reverseStr(str = "") {
  // return str.split("").reverse().join("")
  let revStr = "";
  for (let ind = str.length; ind >= 0; ind--) {
    revStr += str.charAt(ind);
  }
  return revStr;
}
// console.log(reverseStr("Hello World!"));
//! Count vowels and consonants in a string.
function countVowAndCons(str) {
  const obj = { vowels: 0, consonants: 0 };
  for (let ind = 0; ind < str.length; ind++) {
    if ("aeiou".indexOf(str.charAt(ind)) != -1) {
      obj.vowels++;
    } else if (str.charCodeAt(ind) >= 97 && str.charCodeAt(ind) <= 122) {
      obj.consonants++;
    }
  }
  return obj;
}
// console.log(countVowAndCons("Convert a string to lowercase/uppercase."));
//! Convert a string to lowercase/uppercase.

function toLowerCase(str) {
  let res = "";
  for (let ind = 0; ind < str.length; ind++) {
    if (str.charCodeAt(ind) >= 65 && str.charCodeAt(ind) <= 90) {
      res += String.fromCharCode(str.charCodeAt(ind) + 32);
    } else {
      res += str.charAt(ind);
    }
  }
  return res;
}

function toUpperCase(str) {
  let res = "";
  for (let ind = 0; ind < str.length; ind++) {
    if (str.charCodeAt(ind) >= 97 && str.charCodeAt(ind) <= 122) {
      res += String.fromCharCode(str.charCodeAt(ind) - 32);
    } else {
      res += str.charAt(ind);
    }
  }
  return res;
}

function convertTo(str, toUpper = true) {
  let convertedStr = "";
  if (toUpper) {
    convertedStr = toUpperCase(str);
  } else {
    convertedStr = toLowerCase(str);
  }

  //   for (let ind = 0; ind < str.length; ind++) {
  //     const char = str[ind];
  //     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  //       // checking char whether it is uppercase
  //       if (toUpper) {
  //         // needs to be changed uppercase?
  //         convertedStr += char;
  //       } else {
  //         // needs to be changed to lowercase?
  //         convertedStr += String.fromCharCode(char.charCodeAt(0) + 32);
  //       }
  //     } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
  //       // checking char whether it is lowercase
  //       if (toUpper) {
  //         // needs to change to uppercase?
  //         convertedStr += String.fromCharCode(char.charCodeAt(0) - 32);
  //       } else {
  //         // to lowercase?
  //         convertedStr += char;
  //       }
  //     } else {
  //       // it is not an alphabet?
  //       convertedStr += char;
  //     }
  //   }

  return convertedStr;
}

// console.log(convertTo("Find the longest word in a sentence."));
// console.log(convertTo("Find the longest word in a sentence.", false));

//! Find the longest word in a sentence.
function findLongestWord(str) {
  let longest = "";
  for (let word of str.split(" ")) {
    if (word.length > longest.length) longest = word;
  }

  return longest;
}
// console.log(findLongestWord("Remove duplicates from a string"));
//! Check if a string is a palindrome.
function isPalindrome(str) {
  //   return str === reverseStr(str);
  // two pointers approach
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("javascript"));
//! Remove duplicates from a string.
function removeDuplicates(str) {
  let uniqueStr = "";
  for (let char of str) {
    if (!uniqueStr.includes(char)) {
      uniqueStr += char;
    }
  }
  return uniqueStr;
}

// console.log(removeDuplicates("Find all substrings of a given string."));

//! Find all substrings of a given string.
function allSubstrings(str) {
  const substrings = [""];
  for (let itr = 0; itr < str.length; itr++) {
    let substring = "";
    for (let ind = itr; ind < str.length; ind++) {
      // nested loop for substring
      substring += str[ind];
      substrings.push(substring);
    }
  }
  return substrings;
}
// console.log(allSubstrings("string"));

// todo Post-Session Practice Questions:
// todo Concatenate two strings.
// todo Find the frequency of each character in a string.
// todo Replace spaces in a string with %20.
// todo Check if a string is an anagram and panagram of another.
// todo Count the number of words in a sentence.
// todo Find the first non-repeating character in a string.
// todo Remove all vowels from a string.
// todo Find the shortest word in a sentence.
// todo Count occurrences of a substring within a string.
