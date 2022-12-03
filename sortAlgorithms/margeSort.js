function marge(arr1, arr2) {
  let i = 0;
  let j = 0;

  let newArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

function margeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = margeSort(arr.slice(0, mid));
  let right = margeSort(arr.slice(mid));

  return marge(left, right);
}

//console.log(marge([1, 10, 50], [2, 14, 99, 100]));
console.log(margeSort([10, 24, 76, 73]));
