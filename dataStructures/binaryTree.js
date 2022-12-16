class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    if (!this.root) return undefined;

    let node = this.root;

    while (node) {
      if (node.value === val) return node;
      if (val < node.value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root,
      queue = [],
      data = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function travese(node) {
      data.push(node.value);
      if (node.left) travese(node.left);
      if (node.right) travese(node.right);
    }
    travese(current);
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPreOrder());
