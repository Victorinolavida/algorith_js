class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    /*if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this.head;
    }
		*/

    let currentNode = this.head;
    let previousNode = currentNode;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = previousNode;
    previousNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentNode;
  }
  shift() {
    if (!this.head) return undefined;
    /*if (!this.head.next) {
      this.tail = null;
    }*/
    let temporal = this.head;
    this.head = temporal.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return temporal;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
    } else {
      const temporal = this.head;
      newNode.next = temporal;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let counter = 0;
    let node = this.head;

    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);

    if (index === this.length) return !!this.push(value);

    const prevNode = this.get(index - 1);
    const NextNode = prevNode.next;

    const newNode = new Node(value);

    prevNode.next = newNode;
    newNode.next = NextNode;
    this.length++;
    return true;
  }
}

const list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(5);
list.push(6);

console.log(list.insert(0, "new"));
console.log(list);
