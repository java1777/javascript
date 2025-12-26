// 1
// function teskari(arr) {
//   return [...arr].reverse();
// }
// console.log(teskari([1, 2, 3, 4, 5]));

// 2
// function toUpperCase(text) {
//   return text.toUpperCase();
// }
// console.log(toUpperCase("hello"));

// 3
// function yengi(arr, element) {
//   arr.push(element);
//   return arr;
// }
// console.log(yengi([1, 2, 3], 4));

// 4
// function uzunligi(arr) {
//   return arr.length;
// }
// console.log(uzunligi([7, 8, 9]));

// 5
// function replaceInString(str, oldWord, newWord) {
//   return str.replace(oldWord, newWord);
// }
// console.log(replaceInString("Hello World", "World", "JavaScript"));

// 6
// function birinchi(arr) {
//   return arr[0];
// }
// console.log(birinchi([4, 5, 6]));

// 7
// function uzunligi(str) {
//   return str.length;
// }
// console.log(uzunligi("uzbekistan"));

// 8
// function boshigaQoshish(arr, element) {
//   arr.unshift(element);
//   return arr;
// }
// console.log(boshigaQoshish([2, 3, 4], 1));

// 9
// function kichkina(str) {
//   return str.toLowerCase();
// }
// console.log(kichkina("JAVASCRIPT"));

// 10
// function str(arr) {
//   return arr.join(", ");
// }
// console.log(str(["apple", "banana", "cherry"]));

// Medium 1
// function sortArrayAscending(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortArrayAscending([5, 2, 9, 1, 7]));

// 2
// function bolvolish(str, separator = ",") {
//   return str.split(separator);
// }
// console.log(bolvolish("apple,banana,cherry"));

// 3
// function bormi(arr, value) {
//   return arr.includes(value);
// }
// console.log(bormi([1, 2, 3, 4, 5], 3));

// 4
// function getSubstring(str, start, end) {
//   return str.substring(start, end);
// }
// console.log(getSubstring("JavaScript", 0, 4));

// 5
// function juft(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// console.log(juft([1, 2, 3, 4, 5, 6]));

// 6
// function bormi(mainStr, searchStr) {
//   return mainStr.includes(searchStr);
// }
// console.log(bormi("hello world", "world"));

// 7
// function indexi(arr, value) {
//   return arr.indexOf(value);
// }
// console.log(indexi([10, 20, 30, 40], 30));

// 8
// function ajtalgan(arr, start, end) {
//   return arr.slice(start, end);
// }
// console.log(ajtalgan([1, 2, 3, 4, 5], 1, 3));

// 9
// function yegindi(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(yegindi([5, 10, 15]));

// 10
// function almashtirish(str, oldChar, newChar) {
//   return str.split(oldChar).join(newChar);
// }
// console.log(almashtirish("123-456-789", "-", " "));

// 11
// function kotta(arr) {
//   return Math.max(...arr);
// }
// console.log(kotta([1, 5, 3, 7, 2]));

// 12
// function tartibi(arr) {
//   return arr.sort();
// }
// console.log(tartibi(["orange", "apple", "banana"]));

// 13
// function mos(arr, condition) {
//   return arr.every(condition);
// }
// console.log(mos([2, 4, 6], (num) => num % 2 === 0));

// 14
// function teskari(str) {
//   return str.split("").reverse().join("");
// }
// console.log(teskari("javascript"));

// 15
// function mapOperation(arr, operation) {
//   return arr.map(operation);
// }
// console.log(mapOperation([1, 2, 3, 4], (num) => num + 2));

// Hard 1
// function palindromi(str) {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }
// console.log(palindromi("madam"));
// console.log(palindromi("racecar"));
// console.log(palindromi("hello"));

// 2
// function tasodifiy(arr, n) {
//   const a = [...arr].sort(() => Math.random() - 0.5);
//   return a.slice(0, n);
// }
// console.log(tasodifiy([1, 2, 3, 4, 5, 6, 7, 8], 3));
