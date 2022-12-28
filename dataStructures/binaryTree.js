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
  DFSPostOrder() {
    let visited = [],
      current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }
  DFSInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
