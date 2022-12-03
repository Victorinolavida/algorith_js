function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    console.log(arr[i], pivot);
    if (pivot > arr[i]) {
      index++;
      swap(arr, i, index);
    }
  }
  swap(arr, start, index);
  return index;
}

function quickSort(arr, star = 0, end = arr.length - 1) {
  if (star < end) {
    let index = pivot(arr, star, end);
    quickSort(arr, star, index - 1);
    quickSort(arr, index + 1, end);
  }

  return arr;
}

let a = [4, 6, 9, 1, 2, 5, 3];
console.log(a);
console.log(quickSort(a));
