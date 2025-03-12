//? Day 10: Advanced Techniques & Recap
//* Session Focus: Recap of Two-Pointer Technique, Sliding Window, Fast & Slow Pointers, and Hashing.
//? Session Practice Questions:
//! Find two numbers in a sorted array that add up to a target sum (two-pointer).
// Solution 1 -> TC O(n**2) -> SC O(n)
// function targetSum(arr = [], target = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1, -1];
// }

// Solution 1.1 -> TC -> O(n**2) -> SC-> O(1) -> Solution 1 and 1.1 both are same
// function targetSum(arr = [], target = 0) {
//     for (let ind = 0; ind < arr.length; ind++){
//         let anotherVal = target - arr[ind];
//         for (let j = ind + 1; j < arr.length; j++){
//             if (arr[j] == anotherVal){
//                 return [ind, j];
//             }
//         }
//     }
//     return [-1, -1];
// }

// Solution 2 -> TC -> O(n) -> SC -> O(n) -> HashMap

// function targetSum(arr = [], target = 0) {
//   let map = {};
//   for (let ind = 0; ind < arr.length; ind++) {
//     let anotherVal = target - arr[ind];
//     if (map[anotherVal] !== undefined) {
//       return [map[anotherVal], ind];
//     }
//     map[arr[ind]] = ind;
//   }
//   return [-1, -1];
// }

// Solution 3 -> Only for Sorted Arrays -> TC -> O(n) -> SC -> O(1)
function targetSum(arr = [], target = 0) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum == target) {
      return [left, right];
    } else if (currSum > target) {
      right--;
    } else if (currSum < target) {
      left++;
    }
  }
  return [-1, -1];
}

const arr = Array.from({ length: 100 }, (_, i) =>
  Math.floor(Math.random() * 1000)
).sort((a, b) => a - b);

// console.log(
//   targetSum(
//     arr,
//     arr[Math.floor(Math.random() * 100)] +
//       arr[Math.floor(Math.random() * 100)] +
//       Math.floor(Math.random() * 50)
//   )
// );
//! Find the first non-repeating character in a string (hashing).
// O(1), O(logn), O(nk) or O(nm), O(nlogn), O(n**2), O(n**3), O(n!)
// TC -> O(n) -> SC -> O(n)
function firstNonRepeatingChar(str = "") {
  if (str == "") return -1;
  const map = {}; // O(n)
  for (const char of str) {
    // O(n)
    if (map[char] == undefined) {
      map[char] = 1;
    } else {
      map[char] += 1; // map[char] = map[char] + 1;
    }
  }
  for (let ind = 0; ind < str.length; ind++) {
    //O(n)
    if (map[str[ind]] == 1) {
      return ind;
    }
  }
  return -1;
}
// console.log(
//     firstNonRepeatingChar("abracadabra")
// )
//! Find the length of the longest substring without repeating characters (sliding window).
function longestSubstringWithoutRepeating(str = "") {
  if (str == "") return 0;
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let set = new Set();
  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      right++;
      maxLen = Math.max(maxLen, set.size);
    } else {
      while (set.has(str[right])) {
        set.delete(str[left]);
        left++;
      }
    }
  }
  return maxLen;
}
// console.log(longestSubstringWithoutRepeating("abracadabra"));
//! Find the maximum sum of a subarray of size k (sliding window).
function maxSumSubarray(arr = [], k = 0) {
  if (arr.length < k || arr.length == 0 || k == 0) return 0;
  let maxSum = -Infinity;
  let currSum = 0;
  for (let ind = 0; ind < k; ind++) {
    currSum += arr[ind];
  }
  maxSum = Math.max(maxSum, currSum);
  for (let ind = k; ind < arr.length; ind++) {
    currSum = currSum + arr[ind] - arr[ind - k];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(maxSumSubarray([-4, -2, -3, 5, -7, -4], 3));
//! Find the longest subarray with a sum equal to k (sliding window).
function longestSubArrayWithSumK(arr = [], k = 0) {
  if (arr.length == 0) return -1;
  let longestSubArray = [];
  let prefixSum = {};
  let currSum = 0;
  prefixSum[0] = -1;
  for (let ind = 0; ind < arr.length; ind++) {
    currSum += arr[ind];
    if (prefixSum[currSum - k] != undefined) {
      let subArraylen = ind - prefixSum[currSum - k];
      if (longestSubArray.length < subArraylen) {
        longestSubArray = arr.slice(prefixSum[currSum - k] + 1, ind + 1);
      }
    }
    if (prefixSum[currSum] == undefined) {
      prefixSum[currSum] = ind;
    }
  }
  return longestSubArray.length > 0 ? longestSubArray : -1;
}
// console.log(longestSubArrayWithSumK([1, -1, 5, -2, 3], 3)); // Output: [1, -1, 5, -2]
// console.log(longestSubArrayWithSumK([1, 2, 3, 4, 5], 11)); // Output: [3, 4, 5]
// console.log(longestSubArrayWithSumK([1, 2, 3], 7)); // Output: -1
// console.log(longestSubArrayWithSumK([], 5)); // Output: -1
// console.log(longestSubArrayWithSumK([1, 2, 3, -1, -2, 4], 5)); // Output: [1, 2, 3, -1]
//! Check if a permutation of one string is a substring of another (hashing).
function checkInclusion(s1 = "", s2 = "") {
  if (s2.length > s1.length) return false;
  let map1 = Array(26).fill(0);
  let map2 = Array(26).fill(0);

  for (let ind = 0; ind < s2.length; ind++) {
    map1[s1.charCodeAt(ind) - 97]++;
    map2[s2.charCodeAt(ind) - 97]++;
  }
  console.log(map1.join("")); //guvi
  console.log(map2.join("")); //give
  if (map1.join("") == map2.join("")) return true;
  for (let ind = s2.length; ind < s1.length; ind++) {
    map1[s1.charCodeAt(ind) - 97]++;
    map1[s1.charCodeAt(ind - s2.length) - 97]--;
    console.log("----------");
    console.log(map1.join(""));
    console.log(map2.join(""));
    if (map1.join("") == map2.join("")) return true;
  }
  return false;
}

console.log(checkInclusion("guvigeeks", "give")); //vige
//! Find all triplets in an array that sum up to zero (two-pointer).
//! Find the maximum length of a subarray with equal 0s and 1s (sliding window).
// // todo Post-Session Practice Questions:
// // todo Merge two sorted arrays without using extra space (two-pointer).
// // todo Find the first missing positive integer in an array (hashing).
// // todo Count the number of subarrays with a sum equal to zero (sliding window).
// // todo Check if an array contains duplicate elements within k distances (sliding window).
// // todo Find the longest mountain in an array (two-pointer).
// // todo Sort an array by the parity of elements (two-pointer).
// // todo Find all pairs in an array with a difference equal to a target value (two-pointer).
// // todo Find the longest subarray with at most two distinct characters (sliding window).
// // todo Find the first non-repeating element in a stream of characters (hashing).
// // todo Merge two sorted arrays without using extra space (two-pointer).
// // todo Find the largest subarray with a sum less than or equal to a given value (sliding window).
