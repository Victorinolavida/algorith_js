function countUniqueValues(values) {
  // add whatever parameters you deem necessary - good luck!
  if (values.length === 0) {
    console.log('false')
    return;
  }
  let left = 0;
  let rigth = 1;

  let item1 = values[left];
  let item2 = values[rigth];

  while (rigth < values.length) {

    if (item1 !== item2) {

      left += 1;
      item1 = values[rigth];

    } else {
      rigth += 1;
      item2 = values[rigth]
    }

  }
  console.log(left + 1)
}


countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4