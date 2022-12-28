class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueu(val, prio) {
    let newNode = new Node(val, prio);
    this.values.push(newNode);

    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let element = this.values[index];
      let parent = this.values[parentIndex];

      if (parent.priority <= element.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }
  }
  dequeu() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let queue = new PriorityQueue();

queue.enqueu(10, 1);
queue.enqueu(82, 0);
queue.enqueu(82, 3);
queue.enqueu(82, 5);
console.log(queue.dequeu());
console.log(queue.values);
