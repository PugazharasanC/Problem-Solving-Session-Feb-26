// ! Day 6: Sorting Algorithms
// * Session Focus: Introduction to sorting algorithms: bubble sort, selection sort, and insertion sort.
// ! Session Practice Questions:
// ? Implement bubble sort on an array of integers.

function bubbleSort(arr) {
  let count = 0;
  let itr = 0;
  let isSwapHappend;
  do {
    isSwapHappend = false;
    for (let ind = 1; ind < arr.length - itr; ind++) {
      count++;
      if (arr[ind] < arr[ind - 1]) {
        isSwapHappend = true;
        let temp = arr[ind];
        arr[ind] = arr[ind - 1];
        arr[ind - 1] = temp;
      }
    }
    itr++;
  } while (isSwapHappend);

  console.log(count);
}
// bubbleSort([5, 4, 3, 2, 1])
// const arr = Array.from({ length: 1000000 }, (val, ind) => ind + 1);
// arr.push(1000000 - 1);
// bubbleSort(arr);
// ? Sort an array using selection sort.
function selectionSort(arr = []) {
  for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;

    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1] < arr[minInd]) {
        minInd = ind1;
      }
    }

    if (minInd != ind) {
      [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
    }
  }
  return arr;
}
// console.log(arr);
// console.log(selectionSort(arr));
// ? Implement insertion sort on an array of integers.
function insertionSort(arr = []) {
  for (let ind = 1; ind < arr.length; ind++) {
    let curr = arr[ind];
    let ind1 = ind - 1;
    while (ind1 >= 0) {
      if (curr < arr[ind1]) {
        arr[ind1 + 1] = arr[ind1];
      } else {
        break;
      }
      ind1--;
    }
    arr[ind1 + 1] = curr;
  }
  console.log(arr);
}
// console.log(arr);
// insertionSort(arr);
// ? Sort an array of integers in descending order.
function selectionSortDESC(arr = []) {
  for (let ind = 0; ind < arr.length; ind++) {
    let maxInd = ind;

    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind1] > arr[maxInd]) {
        maxInd = ind1;
      }
    }

    if (maxInd != ind) {
      [arr[maxInd], arr[ind]] = [arr[ind], arr[maxInd]];
    }
  }
  return arr;
}
// console.log(selectionSortDESC(arr));
const arr = Array.from({ length: 9 }, () => Math.floor(Math.random() * 1000));
// console.log(arr)
// console.log(selectionSort(arr))
// console.log(arr)
// ? Find the median of a sorted array.
function findMedian(arr = []) {
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 == 0) {
    console.log((arr[mid] + arr[mid - 1]) / 2);
  } else {
    console.log(arr[mid]);
  }
}
// findMedian(arr);
// ? Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).
function dutch(arr) {
    let left = mid = 0;
    let right = arr.length - 1;
    console.log(left, mid, right)
    while (mid <= right) {
        if (arr[mid] == 1) {
            mid++;
        } else if (arr[mid] == 0) {
            [arr[left], arr[mid]] = [arr[mid], arr[left]];
            mid++;
            left++;
        } else {
            [arr[right], arr[mid]] = [arr[mid], arr[right]];
            right--;
        }
    }
    console.log(arr)
}
dutch([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2])
// ? Sort an array of strings by their lengths.

function stringSort(arr = []) {
    for (let ind = 0; ind < arr.length; ind++) {
        let minInd = ind;
        for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
            if (arr[ind1].length < arr[minInd].length) {
                minInd = ind1;
            }
        }
        if (minInd != ind) {
            [arr[minInd], arr[ind]] = [arr[ind], arr[minInd]];
        }
    }
    return arr;
    // return arr.sort((str1, str2) => str1.length - str2.length)
}

// todo Post-Session Practice Questions:
// todo Sort an array using merge sort.
// todo Implement quicksort on an array of integers.
// todo Sort a nearly sorted array (where each element is at most k places away from its target position).
// todo Perform a bucket sort on an array of decimals.
// todo Sort an array of integers by frequency of elements.
// todo Sort an array of strings lexicographically.
// todo Sort an array using heap sort.
// todo Sort a matrix row-wise and column-wise.
// todo Find the kth smallest element in an array.
// todo Sort an array containing negative and positive numbers, with negatives coming first.
