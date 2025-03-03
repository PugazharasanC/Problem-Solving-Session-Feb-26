// ? Day 4: Arrays & Array Manipulations
// * Session Focus: Array creation, traversal, and manipulation techniques.
// ? Session Practice Questions:
// ! Calculate the sum of elements in an array.
function sumOfArr(arr = []) {
  let sum = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    sum += arr[ind];
  }
  return sum;
}

// ! Find the maximum and minimum elements in an array.
function maxAndMin(arr = []) {
  let min = arr[0];
  let max = arr[0];

  for (let ind = 0; ind < arr.length; ind++) {
    if (min > arr[ind]) {
      min = arr[ind];
    }
    if (max < arr[ind]) {
      max = arr[ind];
    }
  }
  return [min, max];
}
// ! Find the second-largest element in an array.

function secondLargest(arr = []) {
  // console.log(arr);
  let max = arr[0];
  let secLargest = -Infinity;
  for (let ind = 1; ind < arr.length; ind++) {
    if (max < arr[ind]) {
      secLargest = max;
      max = arr[ind];
    }
    if (arr[ind] < max && secLargest < arr[ind]) {
      secLargest = arr[ind];
    }
  }
  return secLargest;
}

// console.log(secondLargest([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]));
// ! Rotate an array to the left by one position.
function rotate(arr = []) {
  // O(n)
  let temp = arr[0];
  for (let ind = 1; ind < arr.length; ind++) {
    arr[ind - 1] = arr[ind];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
// rotate([1,2,3,4,5])
// ! Rotate an array to the left by K positions.
// function rotateByK(arr = [], k = 0) { // O(nk)
//   console.log(k);
//   k = k % arr.length;
//   console.log(k);
//   while (k > 0) {
//     rotate(arr);
//     k--;
//   }
//   console.log(arr);
// }
function reverse(arr = [], start = 0, end = arr.length - 1) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateByK(arr = [], k = 0) {
  // O(n)
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k);
  reverse(arr);
  console.log(arr);
}
// rotateByK([1, 2, 3, 4, 5, 6, 7], 2);
// [2, 1, 3, 4, 5, 6, 7];
// [2, 1, 7, 6, 5, 4, 3];
// [3, 4, 5, 6, 7, 1, 2];
// ! Sort an array of integers.
function sort(arr = []) {
  // ASC => first <= second =>  start => end
  // DESC => first >= second => start => end
  // console.log(...arr);
  for (let ind = 0; ind < arr.length; ind++) {
    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind] > arr[ind1]) {
        let temp = arr[ind];
        arr[ind] = arr[ind1];
        arr[ind1] = temp;
      }
    }
  }
  // console.log(...arr);
  return arr;
}

// console.log(...sort(
//   Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
// ));

// ! Remove duplicates from a sorted array.
function removeDuplicates(arr = []) {
  console.log(arr);
  for (let ind = 0, slowInd = 0; ind < arr.length; ind++) {
    if (arr[ind] !== arr[slowInd]) {
      slowInd++;
      arr[slowInd] = arr[ind];
    }
    if (arr.length - 1 == ind) {
      slowInd++;
      arr.length = slowInd;
    }
  }
  return arr;
}
console.log(
  removeDuplicates(
    sort(Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)))
  )
);

module.exports = { sumOfArr, maxAndMin };
// todo Post-Session Practice Questions:
// todo Find the number of occurrences of an element in an array.
// todo Merge two sorted arrays.
// todo Reverse the elements in an array.
// todo Search for an element in a sorted array.
// todo Find the cumulative sum of an array.
// todo Calculate the product of all elements in an array.
// todo Check if an array is a palindrome.
// todo Find the intersection of two arrays.
