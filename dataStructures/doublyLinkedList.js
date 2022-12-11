class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      const oldTail = this.tail;

      oldTail.next = newNode;
      newNode.prev = oldTail;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    const nodeToDelete = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeToDelete.prev;
      this.tail.next = null;
    }

    this.length--;
    return nodeToDelete;
  }
  shift() {
    if (!this.head) return undefined;
    let head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head.prev = null;
    }
    this.length--;
    return head;
  }
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      oldHead.prev = newNode;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node = null;
    if (index <= Math.floor((this.length - 1) / 2)) {
      let current = this.head;
      for (let i = 0; i <= index; i++) {
        node = current;
        current = current.next;
      }
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i >= index; i--) {
        node = current;
        current = current.prev;
      }
    }
    this.length++;
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

    const newNode = new Node(value);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    newNode.prev = prevNode;

    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index);

    const nextNode = removeNode.next;
    const preNode = removeNode.prev;

    preNode.next = nextNode;
    nextNode.prev = preNode;

    this.length--;

    return removeNode;
  }
}

let list1 = new DoublyLinkedList();

for (let i = 0; i < 4; i++) {
  list1.push(i);
}

list1.r;

