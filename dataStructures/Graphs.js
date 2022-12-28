class Graph {
  constructor() {
    this.adjacentList = {};
  }
  addVertex(value) {
    if (!this.adjacentList[value]) {
      this.adjacentList[value] = [];
    }
  }
  addEdge(vex1, vex2) {
    if (this.adjacentList[vex1] && this.adjacentList[vex2]) {
      this.adjacentList[vex1].push(vex2);
      this.adjacentList[vex2].push(vex1);
    } else {
      console.log("error vetex doesnt exist");
    }
  }
  removeEdge(vex1, vex2) {
    this.adjacentList[vex1] = this.adjacentList[vex1].filter(
      (el) => el != vex2
    );

    this.adjacentList[vex2] = this.adjacentList[vex2].filter(
      (el) => el != vex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacentList.length) {
      const adjacent = this.adjacentList[vertex].pop();
      this.removeEdge(adjacent, vertex);
    }
  }
  DFTRecursive(vertex) {
    const visited = {};
    const result = [];
    const vertexs = this.adjacentList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      vertexs[vertex].forEach((neigboor) => {
        if (!visited[neigboor]) return dfs(neigboor);
      });
    })(vertex);
    return result;
  }
  DFTIterative(vertex) {
    const stack = [];
    const visited = {};
    const result = [];
    const listVertex = this.adjacentList;
    stack.push(vertex);

    while (stack.length) {
      let ver = stack.pop();
      if (!visited[ver]) {
        visited[ver] = true;
        result.push(ver);
        listVertex[ver].forEach((v) => stack.push(v));
      }
    }
    return result;
  }
  BFS(vertex) {
    const queue = [vertex];
    const data = [];
    const visited = {};

    visited[vertex] = true;
    while (queue.length) {
      let current = queue.shift();
      data.push(current);

      this.adjacentList[current].forEach((adjacent) => {
        if (!visited[adjacent]) {
          visited[adjacent] = true;
          queue.push(adjacent);
        }
      });
    }
    return data;
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFTIterative("A"));
console.log(graph.BFS("A"));
