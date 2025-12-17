// Array - 18
// let arr = [5, 8, 3, 9, 4];
// let last = arr[arr.length - 1];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < last) {
//     result = arr[i];
//     break;
//   }
// }
// console.log(result);

// Array - 19
// let arr = [5, 8, 3, 9, 4, 7];
// let first = arr[0];
// let last = arr[arr.length - 1];
// let foundIndex = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] > first && arr[i] < last) {
//     foundIndex = i;
//     break;
//   }
// }
// console.log(foundIndex);

// Array - 20
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let K = 2;
// let L = 4;
// let sliced = arr.slice(K, L + 1);
// let sum = 0;
// for (let i = 0; i < sliced.length; i++) {
//   sum += sliced[i];
// }
// console.log(sum);

// Array - 21
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let K = 2;
// let L = 4;
// let sum = 0;
// let count = 0;
// for (let i = K; i <= L; i++) {
//   sum += arr[i];
//   count++;
// }
// let average = count > 0 ? sum / count : 0;
// console.log(average);

// Array - 22
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let K = 2;
// let L = 4;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i < K || i > L) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// Array - 23
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let K = 2;
// let L = 4;
// let sum = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i < K || i > L) {
//     sum += arr[i];
//     count++;
//   }
// }
// let average = count > 0 ? sum / count : 0;
// console.log(average);

// Array - 24
// let arr = [2, 5, 8, 11, 14];
// let a = arr.length > 1 ? arr[1] - arr[0] : 0;
// let arithmetic = true;
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] - arr[i - 1] !== a) {
//     arithmetic = false;
//     break;
//   }
// }
// console.log(arithmetic ? a : 0);

// Array - 25
// let arr = [2, 6, 18, 54];
// if (arr.length < 2 || arr[0] === 0) {
//   console.log(0);
// } else {
//   let a = arr[1] / arr[0];
//   let b = true;
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] / arr[i - 1] !== a) {
//       b = false;
//       break;
//     }
//   }
//   console.log(b ? a : 0);
// }

// Array - 1;
// let n = 5;
// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr.push(2 * i + 1);
// }
// console.log(arr);

// Array - 2;
// let n = 5;
// let arr = [];
// let sum = 1;
// for (let i = 0; i < n; i++) {
//   arr.push(sum);
//   sum *= 2;
// }
// console.log(arr);

// Array - 3;
// let n = 5;
// let a = 3;
// let b = 4;
// let arr = [];
// let c = a;
// for (let i = 0; i < n; i++) {
//   arr.push(c);
//   c += b;
// }
// console.log(arr);
