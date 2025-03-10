//? Day 8: Linked Lists
//* Session Focus: Introduction to linked lists and basic operations: insertion, deletion, and traversal.
//? Session Practice Questions:
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //! Insert a node at the beginning of a linked list.
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  insertLast(data) {
    if (this.head == null) this.head = new Node(data);
    else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }
  //! Delete the last node in a linked list.
  deleteLast() {
    if (this.head == null) return null;
    else if (this.head.next == null) {
      let data = this.head.data;
      this.head = null;
      return data;
    } else {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      let data = current.next.data;
      current.next = null;
      return data;
    }
  }
  //! Reverse a linked list iteratively.
  reverse() {
    let prev = null;
    let current = this.head;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  //! Find the middle node of a linked list.
  middleNode() {
    // fast and slow pointer
    let fast = this.head; // Hari
    let slow = this.head; //Pugazh
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }
  //! Detect a cycle in a linked list using fast and slow pointers.
  hasCycle() {
    let fast = this.head;
    let slow = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast == slow) {
        return true;
      }
    }
    return false;
  }

  /// needed only when you're in a position to explain this to a group of audience;
  makeCycle(pos) {
    let x = this.head;
    let y = this.head;
    let count = 1;
    while (x.next != null) {
      if (pos == count) {
        y = x;
        break;
      }
      x = x.next;
      count++;
    }
    x.next = y;
  }
  toArray() {
    let arr = [];
    let current = this.head;
    while (current != null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
    //! Remove duplicates from a sorted linked list.
    removeDuplicates() {
        let fast = this.head;
        let slow = this.head;
        while (fast != null) {
            if (fast.data !== slow.data) {
                slow = slow.next;
                slow.data = fast.data;
            }
            fast = fast.next;
        }
        slow.next = null;
    }
}
// [head] -> [10,-]--> [20, -]--> [30, -]--> null
const list = new LinkedList();
Array.from({ length: 10 }, (v, i) => Math.floor(Math.random() * 5))
  .sort((a, b) => a - b)
  .forEach((x) => list.insertLast(x));
console.log(list.toArray());
list.removeDuplicates()
console.log(list.toArray());

// list.insertFirst(10);
// list.insertLast(20);
// list.insertFirst(30);
// list.insertLast(40);
// list.insertFirst(50);
// console.log(list);
// list.reverse();
// console.log(list);
// console.log(list.middleNode());
// // list.makeCycle(Math.floor(Math.random() * 10));
// console.log(list.hasCycle());
// console.log(list.deleteLast());
// console.log(list);
// console.log(list.deleteLast());
// console.log(list);
// console.log(list.deleteLast());
// console.log(list);
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// console.log(list.deleteLast());
// todo Post-Session Practice Questions:
// todo Reverse a linked list recursively.
// todo Check if a linked list is a palindrome.
// todo Remove the n-th node from the end of a linked list.
// todo Find the intersection point of two linked lists.
// todo Flatten a multilevel doubly linked list.
// todo Add two numbers represented by linked lists.
// todo Partition a linked list around a value x.
// todo Clone a linked list with random pointers.
// todo Split a linked list into two halves.
// todo Merge two sorted linked lists.
// todo Sort a linked list using merge sort.
