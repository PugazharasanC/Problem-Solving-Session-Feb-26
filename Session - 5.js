const { rotateByK } = require("./Session - 4.js");

// ? Day 5: Searching Algorithms
// * Session Focus: Linear search and binary search techniques.
// ? Session Practice Questions:
// ! Implement a linear search to find an element in an array.
// * Algorithm
// * 0. You're having a function with 2 args, arr and target.
// * 1. Start from the first element of the array.
// * 2. Compare the target element with each element in the array.
// * 3. If the target element is found, return its index.
// * 4. If the target element is not found, return -1.

function linearSearch(arr = [], target = 0, start = 0) {
  for (let ind = start; ind < arr.length; ind++) {
    if (arr[ind] == target) {
      return ind;
    }
  }
  return -1;
}
// array with duplicate values
// console.log(
//   linearSearch([3, 4, 3, 3, 5, 23, 6, 8, 75, 76, 33, 6, 4, 89, 3], 3)
// );
// console.log(linearSearch([3, 4, 3, 3, 5, 23, 6, 8, 75, 76, 33, 6, 4, 89, 3], 3, 4))

// ! Implement a binary search on a sorted array.
// * Algorithm
// * 0. You're having a function with 2 args, arr and target.
// * 1. Start from the middle element of the array.
// * 2. Compare the target element with the middle element.
// * 3. If the target element is found, return its index of middle element.
// * 4. If the target element is greater than the middle element, search the right half of the array.
// * 5. If the target element is less than the middle element, search the left half of the array.
// * 6. Repeat the process until the target element is found or the array is empty.
// * 7. If the target element is not found, return -1.
function binarySearch(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// console.log(
//   binarySearch(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 100)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 100)
//   )
// );
// ! Find the first and last occurrence of a target in an array.
function firstAndLastOccurrenceArr(arr = [], target = 0) {
  let first = -1;
  let last = -1;
  let count = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == target) {
      last = ind;
      count++;
      if (first == -1) {
        first = ind;
      }
    }
  }
  return { count, first, last };
}

function firstAndLastOccurrenceSortedArr(arr = [], target = 0) {
  function findOccurrence(arr, target, isFirst = true) {
    let start = 0;
    let end = arr.length - 1;
    let foundInd = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] == target) {
        foundInd = mid;
        if (isFirst) end = mid - 1;
        else start = mid + 1;
      } else if (arr[mid] > target) end = mid - 1;
      else start = mid + 1;
    }
    return foundInd;
  }

  console.log(...arr);
  console.log(target);
  let first = findOccurrence(arr, target);
  let last = findOccurrence(arr, target, false);
  return { first, last };
}

// console.log(
//   firstAndLastOccurrenceSortedArr(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 10)
//   )
// );
// ! Count occurrences of a target using binary search.
function countOccurrences(arr, target) {
  const { first, last } = firstAndLastOccurrenceSortedArr(arr, target);
  return first == -1 ? 0 : last - first + 1;
}
// console.log(
//   countOccurrences(
//     Array.from({ length: 25 }, () => Math.floor(Math.random() * 10)).sort(
//       (a, b) => a - b
//     ),
//     Math.floor(Math.random() * 10)
//   )
// );

// ! Find the index where an element should be inserted in a sorted array.
function findInsertionIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}
// ! Find the peak element in a mountain array.
function peakElement(arr = []) {
  if (arr.length < 2) return -1;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (
      (mid == arr.length - 1 || arr[mid] > arr[mid + 1]) &&
      (mid == 0 || arr[mid] > arr[mid - 1])
    )
      return mid;
    else if (arr[mid] > arr[mid + 1]) end--;
    else start++;
  }
  return -1;
}
// console.log(peakElement([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));
// console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]));
// console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]));
// ! Search for a target in a rotated sorted array.

function searchRotated(arr = [], target = 0) {
  console.log(...arr);
  console.log(target);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target)
      return mid; // if target is equals with mid, return mid
    else if (arr[start] <= arr[mid]) {
      // if left side us sorted
      if (arr[start] <= target && target < arr[mid])
        end = mid - 1; // is taget within the range?
      else start = mid + 1; // if target is not in the sorted range
    } else {
      // if right side is sorted
      if (arr[mid] < target && target <= arr[end])
        start = mid + 1; // if target is in the right side ?
      else end = mid - 1; // what if it is not there?
    }
  }
  return -1;
}
console.log(
  searchRotated(
    rotateByK(
      Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).sort(
        (a, b) => a - b
      ),
      Math.floor(Math.random() * 10)
    ),
    Math.floor(Math.random() * 10)
  )
);
// todo Post-Session Practice Questions:
// todo Find the floor and ceiling of a target in a sorted array.
// todo Find the smallest missing element in a sorted array.
// todo Perform ternary search on a sorted array.
// todo Find the index of a target in an infinite array.
// todo Find the minimum element in a rotated sorted array.
// todo Count the frequency of elements using binary search.
// todo Find the closest element to a target in a sorted array.
// todo Implement an exponential search.
// todo Find the peak index in a bitonic array.
