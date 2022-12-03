function sameFrequency(num1, num2) {
  if (`${num1}`.length !== `${num2}`.length) return false;
  dic1 = {}
  for (let i of `${num1}`) {

    if (!dic1[i]) {
      dic1[i] = 0
    }
    dic1[i]++
  }

  for (let i of `${num2}`) {

    if (!dic1[i]) {
      return false
    } else {
      dic1[i]--
    }

  }
  return true;





  // good luck. Add any arguments you deem necessary.
}

function areThereDuplicates(...values) {
  values.sort();
  let start = 0;
  let next = 1;
  while (next < values.length) {
    if (values[start] === values[next]) {
      return true
    }
    start++
    next++
  }
  return false


}

function averagePair(arr, value) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length === 0) return false;

  let i = 0;
  let j = 1;


  while (i < arr.length - 1) {

    let average = (arr[j] + arr[i]) / 2;

    if (average === value) return true;

    if (j < arr.length - 1) {
      j++
    } else {
      i++
      j = i + 1
    }
  }

  return false
}

function averagePair2(arr, num) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}

function isSubsequence(sub1, string) {
  // good luck. Add any arguments you deem necessary.

  // hello    hello world
  var i = 0;
  var j = 0;

  while (j < string.length) {

    if (string[j] == sub1[i]) i++;
    if (i == sub1.length) return true;
    j++
  }

  return false

}


function maxSubarraySum(values, items) {
  // add whatever parameters you deem necessary - good luck!
  if (values.length === 0) return null;
  if (values.length < items) return null;

  let max = 0;
  let temporal = 0;

  for (let j = 0; j < items; j++) {
    max += values[j]
  }
  temporal = max;
  for (let i = items; i < values.length; i++) {
    temporal = temporal + values[i] - values[i - items]
    if (temporal > max) {
      max = temporal
    }
  }
  return max
}

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (seen[char]) {
      start = Math.max(start, seen[char])
    }

    longest = Math.max(longest, i - start + 1)

    seen[char] = i + 1
  }
  return longest
}

findLongestSubstring('thisishowwedoit')


module.exports = {
  minSubArrayLen,
  findLongestSubstring,
  isSubsequence,
  sameFrequency,
  areThereDuplicates,
  averagePair,
  averagePair2,
  maxSubarraySum
}

