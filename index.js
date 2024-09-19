// 1. Ans
function calculateDifference(c, d) {
  return c - d;
}
console.log(calculateDifference(10, 5));

// 2. Ans
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(7));
// 3. Ans
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([40, 100, 1, 5, 25, 10]));
// 4. Ans
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// 5. Ans
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}
console.log(sortArrayDescending([2, 3, 5, 9, 7, 6, 8]));

// 6. Ans
function lowercaseFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("HEllo"));

// 7. Ans
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str.split("").filter((char) => vowels.includes(char)).length;
}
console.log(countVowels("Hello World. I Am Learner"));

// 8. Ans
function findAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}
console.log(findAverage([2, 3, 6, 8, 9]));
