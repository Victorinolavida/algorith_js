class PriorityQueu {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WightedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(value) {
    if (!this.adjacentList[value]) {
      this.adjacentList[value] = [];
    }
  }
  addEdge(vex1, vex2, weight) {
    this.adjacentList[vex1].push({ node: vex2, weight });
    this.adjacentList[vex2].push({ node: vex1, weight });
  }
  Dijkstra(start, end) {
    const nodes = new PriorityQueu();
    const distances = {};
    const previus = {};
    let smallest;
    const path = [];

    for (let vertex in this.adjacentList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previus[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === end) {
        while (previus[smallest]) {
          path.push(previus[smallest]);
          smallest = previus[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neigbor in this.adjacentList[smallest]) {
          let nextNode = this.adjacentList[smallest][neigbor];

          let candidate = distances[smallest] + nextNode.weight;

          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previus[nextNode.node] = smallest;
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.reverse();
  }
}

let graph = new WightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

let a = graph.Dijkstra("A", "E");
console.log(a);
