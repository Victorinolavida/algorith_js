const { sameFrequency, areThereDuplicates, averagePair, averagePair2, isSubsequence
  , maxSubarraySum,
  minSubArrayLen,
  findLongestSubstring

} = require(".");



test('(182,281) -> true', () => {
  expect(sameFrequency(182, 281)).toBe(true);
});

test('(34,14) -> false', () => {
  expect(sameFrequency(34, 14)).toBe(false);
});

test('(3589578, 5879385) -> true', () => {
  expect(sameFrequency(3589578, 5879385)).toBe(true);
});

test('(22, 222) -> false', () => {
  expect(sameFrequency(22, 222)).toBe(false);
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


test('areThereDuplicates 1 2 3', () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
});

test('areThereDuplicates 1 2 3 ', () => {
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
});

test('areThereDuplicates a b c a ', () => {
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

test('averagePair [1,2,3]--2.5', () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
});

test('averagePair [1,3,3,5,6,7,10,12,19]--8 ', () => {
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
});

test('averagePair [-1,0,3,4,5,6] -- 4.1) ', () => {
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
});

test('averagePair []--4) ', () => {
  expect(averagePair([], 4)).toBe(false);
});


test('averagePair2 [1,2,3]--2.5', () => {
  expect(averagePair2([1, 2, 3], 2.5)).toBe(true);
});

test('averagePair2 [1,3,3,5,6,7,10,12,19]--8 ', () => {
  expect(averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
});

test('averagePair2 [-1,0,3,4,5,6] -- 4.1 ', () => {
  expect(averagePair2([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
});

test('averagePair2 []--4 ', () => {
  expect(averagePair2([], 4)).toBe(false);
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

test('isSubsequence -> hello, hello world', () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
});

test('isSubsequence -> sing, sting ', () => {
  expect(isSubsequence('sing', 'sting')).toBe(true);
});

test('isSubsequence -> abc, abracadabra) ', () => {
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
});

test('isSubsequence -> abc, acb ', () => {
  expect(isSubsequence('abc', 'acb')).toBe(false);
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

test('maxSubarraySum -> [100, 200, 300, 400] - 2', () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
});

test('maxSubarraySum -> [1, 4, 2, 10, 23, 3, 1, 0, 20] - 4', () => {
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test('maxSubarraySum -> [-3, 4, 0, -2, 6, -1] - 2', () => {
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test('maxSubarraySum -> abc, acb ', () => {
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
});

test('maxSubarraySum -> [2, 3] - 3', () => {
  expect(maxSubarraySum([2, 3], 3)).toBe(null);
});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

test('minSubArrayLen -> [2, 3, 1, 2, 4, 3], 7', () => {
  expect(minSubArrayLen([100, 200, 300, 400], 2)).toBe(1);
});

test('minSubArrayLen -> [2, 1, 6, 5, 4], 9', () => {
  expect(minSubArrayLen([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(1);
});

test('minSubArrayLen -> [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52', () => {
  expect(minSubArrayLen([-3, 4, 0, -2, 6, -1], 2)).toBe(1);
});

test('minSubArrayLen -> [1, 4, 16, 22, 5, 7, 8, 9, 10], 39', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
});

test('minSubArrayLen -> [1, 4, 16, 22, 5, 7, 8, 9, 10], 55', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
});

test('minSubArrayLen -> [1, 4, 16, 22, 5, 7, 8, 9, 10], 39', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
});

test('minSubArrayLen -> [4, 3, 3, 8, 1, 2, 3], 11', () => {
  expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
});

test('minSubArrayLen -> [1, 4, 16, 22, 5, 7, 8, 9, 10], 95', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
});

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


test('findLongestSubstring "" ', () => {
  expect(findLongestSubstring("")).toBe(0);
});

test('findLongestSubstring rithmschool', () => {
  expect(findLongestSubstring('rithmschool')).toBe(7);
});

test('findLongestSubstring thisisawesome', () => {
  expect(findLongestSubstring("thisisawesome")).toBe(6);
});

test('findLongestSubstring bbbbbb', () => {
  expect(findLongestSubstring('bbbbbb')).toBe(1);
});

test('findLongestSubstring -> longestsubstring', () => {
  expect(findLongestSubstring('longestsubstring')).toBe(8);
});

test('findLongestSubstring -> thisishowwedoit', () => {
  expect(findLongestSubstring('thisishowwedoit')).toBe(6);
});




