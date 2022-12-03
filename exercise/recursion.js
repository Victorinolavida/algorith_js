// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  // add whatever parameters you deem necessary - good luck!
  if (string.length <= 1) return true;


  if (string[0] !== string[string.length - 1]) return false;

  let newString = string.slice(1, -1)


  return isPalindrome(newString)
}
// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(array, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return false;

  if (callback(array[0])) return true;

  array.shift();

  return someRecursive(array, callback)
}

function flatten(array) {

  let newArray = [];


  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {
      newArray = newArray.concat(flatten(array[i]))
    } else {
      newArray.push(array[i])
    }

  }

  return newArray
}



function capitalizeFirst(wordsArray) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = []
  let newWord = wordsArray[0][0].toUpperCase() + wordsArray[0].slice(1)

  if (wordsArray.length === 1) return newArray.concat(newWord)


  newArray = newArray.concat(newWord)

  return newArray.concat(capitalizeFirst(wordsArray.slice(1)))

}


function nestedEvenSum(object) {
  // add whatever parameters you deem necessary - good luck!
  let sum = [];
  for (let key of Object.keys(object)) {

    if (typeof (object[key]) === 'number' && object[key] % 2 === 0) {
      sum.push(object[key])
    }

    if (typeof (object[key]) === 'object') {
      sum = sum.concat(nestedEvenSum(object[key]))
    }
  }

  return sum.reduce((pre, current) => pre + current, 0)
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

// let a = nestedEvenSum(obj1); // 6
// let b = nestedEvenSum(obj2); // 10

// console.log(a, b)



function capitalizeWords(words) {
  // add whatever parameters you deem necessary - good luck!


  if (words.length === 1) return [words[0].toUpperCase()]

  let wordUpper = capitalizeWords(words.slice(0, -1))

  wordUpper.push(words.slice(words.length - 1)[0].toUpperCase())

  return wordUpper

}

// let words = ['i', 'am', 'learning', 'recursion'];
// let a = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// console.log(a)



function stringifyNumbers(obj) {

  for (let key of Object.keys(obj)) {

    if (typeof (obj[key]) === 'number') {
      obj[key] = obj[key].toString()
    }

    if (typeof (obj[key]) === 'object') {
      stringifyNumbers(obj[key])
    }
  }
  return obj
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// console.log(stringifyNumbers(obj)
// )

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }


function collectStrings(object) {

  let words = []

  for (let key in object) {

    if (typeof (object[key]) === 'string') {
      words.push(object[key])
    }

    if (typeof (object[key]) === 'object') {
      words = words.concat(collectStrings(object[key]))
    }

  }
  words.includes
  return words
}


const objeto = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

// collectStrings(objeto) // ["foo", "bar", "baz"])



module.exports = { isPalindrome, someRecursive, isOdd, flatten }