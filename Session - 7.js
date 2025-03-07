//? Day 7: Stacks, Queues & Recursion
//* Session Focus: Stack and queue operations, recursive problem-solving techniques.
//? Session Practice Questions:
//! Implement a stack using an array.
class Stack {
  constructor(size = +Infinity) {
    this.stack = []; // for holding the data
    this.size = size; // the max size
    this.top = -1; // current position of the last inserted element
  }

  isEmpty() {
    return this.top == -1;
  }

  isFull() {
    return this.top + 1 == this.size;
  }

  push(data) {
    if (this.isFull()) {
      return "Stack Overflow";
    }
    this.top++;
    this.stack.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    this.top--;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.top];
  }
  toArray() {
    return [...this.stack];
  }
}

//! Check for balanced parentheses in an expression.
function isBalanced(str = "") {
  const stack = new Stack();
  const obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let paran of str) {
    if (paran == "(" || paran == "[" || paran == "{") {
      stack.push(paran);
    } else if (paran == ")" || paran == "]" || paran == "}") {
      if (stack.isEmpty() || obj[paran] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
// const testCases = [
//   {
//     input: "()",
//     expected: true,
//   },
//   {
//     input: "({[()]})",
//     expected: true,
//   },
//   {
//     input: "([)]",
//     expected: false,
//   },
//   {
//     input: "(((",
//     expected: false,
//   },
//   {
//     input: "",
//     expected: true, // An empty string is trivially balanced
//   },
//   {
//     input: "((()))",
//     expected: true,
//   },
//   {
//     input: "{[({[()]})]}",
//     expected: true,
//   },
//   {
//     input: "{[({[())]}",
//     expected: false,
//   },
//   {
//     input: "{[]",
//     expected: false,
//   },
// ];
// testCases.forEach(({ input, expected }) => {
//   const result = isBalanced(input);
//   console.log(`Input: "${input}" => Expected: ${expected}, Got: ${result}`);
//   console.assert(result === expected, `Test failed for input: "${input}"`);
// });
//! Reverse a string using a stack.
function reverse(str = "") {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}
// console.log(reverse("Hello everyone!...."));
//! Find the next greater element for each array element.
function nextGreaterElement(arr) {
  //O(n**2)
  // for (let ind = 0; ind < arr.length; ind++){
  //     let res = -1;
  //     for (let ind1 = ind + 1; ind1 < arr.length; ind1++){
  //         if (arr[ind] < arr[ind1]) {
  //             res = arr[ind1];
  //             break;
  //         }
  //     }
  //     arr[ind] = res;
  // }
  // return arr;
  const stack = new Stack();
  let res = Array(arr.length).fill(-1);
  for (let ind = 0; ind < arr.length; ind++) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[ind]) {
      res[stack.pop()] = arr[ind];
    }
    stack.push(ind);
  }
  return res;
}

// console.log(nextGreaterElement([4, 5, 2, 25]));
// console.log(nextGreaterElement([13, 7, 6, 12]));
//! Implement a queue using two stacks.
function Queue() {
  const stack1 = [];
  const stack2 = [];

  return {
    enqueue: (data) => {
      stack1.push(data);
    },
    dequeue: () => {
      if (stack1.length == 0 && stack2.length == 0) return "Queue is empty";
      if (stack2.length == 0)
        while (stack1.length) {
          stack2.push(stack1.pop());
        }
      return stack2.pop();
    },
  };
}

// const queue = Queue();
// queue.enqueue(1);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4)
// queue.enqueue(5);
// console.log(queue.dequeue());
// console.log(queue.dequeue())
// console.log(queue.dequeue());
// queue.enqueue(6);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
//! Design a browser’s forward and backward navigation (stack-based).
function browserHistory() {
  const history = [];
  const forwardHistory = [];
  return {
    visit: (page) => {
      history.push(page);
      forwardHistory.length = 0;
      return `Currently viewing ${history[history.length - 1]}`;
    },
    back: () => {
      if (history.length == 1) return "No more pages in the history";
      forwardHistory.push(history.pop());
      return `Currently viewing ${history[history.length - 1]}`;
    },
    forward: () => {
      if (forwardHistory.length == 0)
        return "No more pages in the forward history";
      history.push(forwardHistory.pop());
      return `Currently viewing ${history[history.length - 1]}`;
    },
  };
}
// const myBrowser = browserHistory();
// console.log(myBrowser.visit("Page 1"));
// console.log(myBrowser.visit("Page 2"));
// console.log(myBrowser.visit("Page 3"));
// console.log(myBrowser.back());
// console.log(myBrowser.back());
// console.log(myBrowser.visit("page 4"));
// console.log(myBrowser.back());
// console.log(myBrowser.forward());
// console.log(myBrowser.forward());
// console.log(myBrowser.forward());
// todo Post-Session Practice Questions:
// todo Implement a circular queue.
// todo Sort a stack using recursion.
// todo Find the maximum element in a stack in constant time.
// todo Design a data structure supporting min, max, push, and pop in constant time.
// todo Reverse the first k elements of a queue.
// todo Implement a priority queue.
// todo Find the minimum element in a stack.
// todo Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.
// todo Design a system that supports efficient insertion and retrieval of most recent elements (deque).
