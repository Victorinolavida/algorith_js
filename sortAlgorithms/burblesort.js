
/*
function burbblesort(arr){


  for(let i=0;i<arr.length;i++){
    for (let j = 0; j < arr.length-i; j++) {
    console.log(arr,arr[j],arr[j+1]) 
      if(arr[j]>arr[j+1]){
        //swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

  }

  return arr;
}
*/

function burbblesort(arr){


  for(let i=arr.length;i>0;i--){
    let noSwaps = true
    for (let j = 0; j < i-1; j++) {
    console.log(arr,arr[j],arr[j+1]) 
      if(arr[j]>arr[j+1]){
        //swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }

  return arr;
}

let result = burbblesort([4,1,2,3])


console.log(result)
