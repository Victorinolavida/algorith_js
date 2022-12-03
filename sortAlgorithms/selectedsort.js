

function selectionSort(arr) {
  
  for(let i=0;i<arr.length;i++){
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j]< arr[lowest]){
        lowest = j;
      } 
    }
    if(i!==lowest){
    let temporl = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] =temporl
    }
  }

  return arr; }



let result = selectionSort([1,4,56,78,9])

console.log(result);
