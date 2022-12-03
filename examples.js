function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total
}

function addUpTo2(n) {
  return n * (n + 1) / 2
}


console.log(addUpTo(50))
console.log(addUpTo2(50))
