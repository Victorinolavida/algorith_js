class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const prevFirst = this.first;
      this.first = node;
      this.first.next = prevFirst;
    }

    return this.size++;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp;
  }
}
