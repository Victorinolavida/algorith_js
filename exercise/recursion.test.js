const { isPalindrome, someRecursive, isOdd
  , flatten
} = require('./recursion')

test('isPalindrome - awesome', () => {
  expect(isPalindrome('awesome')).toBe(false);
});

test('isPalindrome - foobar', () => {
  expect(isPalindrome('foobar')).toBe(false);
});

test('isPalindrome - tacocat', () => {
  expect(isPalindrome('tacocat')).toBe(true);
});

test('isPalindrome - amanaplanacanalpanama', () => {
  expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
});

test('isPalindrome - amanaplanacanalpandemonium', () => {
  expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
});

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


test('someRecursive - [1,2,3,4], isOdd', () => {
  expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
});

test('someRecursive - [4,6,8,9], isOdd', () => {
  expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
});

test('someRecursive - [4,6,8,9], isOdd', () => {
  expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
});

test('someRecursive - [4,6,8], isOdd', () => {
  expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
});

test('someRecursive - [4,6,8], val => val > 10', () => {
  expect(someRecursive([4, 6, 8], val => val > 10)).toBe(false);
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////

test('flatten - [1, 2, 3, [4, 5] ]', () => {
  expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test('flatten - [1, [2, [3, 4], [[5]]]]', () => {
  expect(flatten([1, [2, [3, 4], [[5]]]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test('flatten - [[1],[2],[3]]', () => {
  expect(flatten([[1], [2], [3]])).toStrictEqual([1, 2, 3]);
});

test('flatten - [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]', () => {
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toStrictEqual([1, 2, 3]);
});



