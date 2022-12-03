function getDigit(number, index) {
  return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
}

function countDigits(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(numbers) {
  let maxValue = 0;

  for (number of numbers) {
    maxValue = Math.max(maxValue, countDigits(number));
  }

  return maxValue;
}

function radixSort(array) {
  let maxDigits = mostDigits(array);

  for (let i = 0; i < maxDigits; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (const number of array) {
      digitBuckets[getDigit(number, i)].push(number);
    }
    array = [].concat(...digitBuckets);
  }

  return array;
}

console.log(raodixSort([32, 4234, 5231, 5, 4, 948, 3]));
