function binarySearch(array, value) {
  // add whatever parameters you deem necessary - good luck!

  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((end + start) / 2)

  while (array[middle] !== value && start <= end) {

    if (array[middle] < value) {
      start = middle + 1
    } else {
      end = middle - 1
    }

    middle = Math.floor((end + start) / 2)

  }
  if (array[middle] === value) return middle

  return -1
}

let a = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2

console.log(a)

console.log(binarySearch([1, 2, 3, 4, 5], 2))