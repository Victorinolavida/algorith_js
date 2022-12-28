function hash(key, arrlen) {
  let total = 0;
  let WEIRD_PRIME = 71;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrlen;
  }

  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 71;
    for (let i = 0; i < Math.min(this.keyMap.length - 1, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }
  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
  keys() {
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][0])) {
            values.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return values;
  }
}

let li = new HashTable(5);

li.set("hola", 1);
li.set("adio", 4);
li.set("hola y adios", 334);
li.set("hola aaaa ", 5);

console.log(li.keys());
