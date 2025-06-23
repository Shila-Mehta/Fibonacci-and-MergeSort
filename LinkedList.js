 class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return `( ${this.data} )`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  atIndex(index) {
    let temp = this.head;
    let i = 0;

    while (temp !== null && i < index) {
      temp = temp.next;
      i++;
    }

    return temp;
  }

  pop() {
    if (!this.head) return null;

    if (this.head === this.tail) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return node;
    }

    let temp = this.head;
    while (temp.next !== this.tail) {
      temp = temp.next;
    }

    const node = this.tail;
    temp.next = null;
    this.tail = temp;
    this.size--;
    return node;
  }

  contains(data) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.data === data) return true;
      temp = temp.next;
    }
    return false;
  }

  find(data) {
    let temp = this.head;
    let i = 0;
    while (temp !== null) {
      if (temp.data === data) return i;
      temp = temp.next;
      i++;
    }
    return null;
  }

  display() {
    let temp = this.head;
    let str = "";

    while (temp !== null) {
      str += `${temp.toString()} -> `;
      temp = temp.next;
    }

    str += "null";
    console.log(str);
  }
}

// Test
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.display();
