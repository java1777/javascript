// For - 6
// let price = 17000;

// for (let i = 0.2; i <= 2; i += 0.2) {
//   console.log(i.toFixed(1) + " kg = ", (i * price).toFixed(0));
// }

// For - 7
// let a = 77;
// let b = 100;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum += 1;
// }
// console.log("Yeg'indi:", sum);

// For - 8
// let a = 7;
// let b = 11;
// let p = 1;

// for (let i = a; i <= b; i++) {
//   p *= i;
// }
// console.log("Kopaytmasi:", p);

// For - 9
// let a = 1;
// let b = 2;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum += i * i;
// }
// console.log("Kvadratlarini yeg'indisi:", sum);

// <----------------------------------------------------->

// While - 16
// let kunlikMasofa = 10;
// let jami = kunlikMasofa;
// let kun = 1;
// let p = 10;

// while (jami < 200) {
//   kunlikMasofa = kunlikMasofa + (kunlikMasofa * p) / 100;
//   jami += kunlikMasofa;
//   kun++;
// }
// console.log("Natija:" + kun + "kundan kegin 200km dan oshadi");
// console.log("Jami masofa:" + jami.toFixed(2) + " km");

// While - 17
// let n = 123;
// let sum = 0;

// while (n > 0) {
//   console.log(n % 10);

//   sum += n % 10;

//   n = parseInt(n / 10);

//   if (sum > 0) {
//     console.log("Raqamlar yeg'indisi:", sum);
//   } else {
//     console.log("Hisoblab bo'lmadi");
//   }
// }

// While - 18
// let n = 123;
// let reverse = 0;

// while (n > 0) {
//   console.log(n % 10);

//   reverse = reverse * 10 + (n % 10);

//   n = parseInt(n / 10);
// }

// if (reverse > 0) {
//   console.log("Teskari son:", reverse);
// } else {
//   console.log("Hisoblab bo'lmadi");
// }

// While - 19
// let n = 77;
// let sum = 0;

// while (n > 0) {
//   console.log(n % 10);

//   sum += n % 10;

//   n = parseInt(n / 10);
// }

// if (sum > 0) {
//   console.log("Raqamlar yig'indisi:", sum);
// } else {
//   console.log("Hisoblab bomadi");
// }

// While - 20
// let n = 275412;
// let ikkiBormi = false;

// while (n > 0) {
//   console.log(n % 10);

//   if (n % 10 === 2) {
//     ikkiBormi = true;
//     break;
//   }
//   n = parseInt(n / 10);
// }
// if (ikkiBormi === true) {
//   console.log("Ikki bor!");
// } else if (ikkiBormi === false) {
//   console.log("Ikki yo'q");
// }

// While - 21
// let n = 275412;
// let toqBormi = false;

// while (n > 0) {
//   let oxirgi = n % 10;

//   if (oxirgi % 2 === 1) {
//     toqBormi = true;
//     break;
//   }

//   n = parseInt(n / 10);
// }

// if (toqBormi) {
//   console.log("Toq raqam bor!");
// } else {
//   console.log("Toq raqam yo'q!");
// }

// While - 22
// let n = 71;
// let i = 2;
// let tub = true;

// while (i < n) {
//   if (n % i === 0) {
//     tub = false;
//     break;
//   }
//   i++;
// }

// if (tub) {
//   console.log("Tub son");
// } else {
//   console.log("Tubmas");
// }

// While - 23
// let a = 77;
// let b = 7;

// while (a !== b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }
// console.log("EKUB =", a);

// <----------------------------------------------------->

// If - 6
// let a = 77;
// let b = 55;

// if (a > b) {
//   console.log("Katta son:", a);
// }

// if (b > a) {
//   console.log("Katta son:", b);
// }

// if (a === b) {
//   console.log("Ikkalasi teng");
// }

// If - 7
// let a = 77;
// let b = 55;

// if (a < b) {
//   console.log("Kichik son tartib raqami: 1");
// }

// if (b < a) {
//   console.log("Kichik son tartib raqami: 2");
// }

// if (a === b) {
//   console.log("Ikkalasi teng");
// }

// If - 8
// let a = 77;
// let b = 55;

// if (a > b) {
//   console.log(a);
//   console.log(b);
// }

// if (b > a) {
//   console.log(b);
//   console.log(a);
// }

// if (a === b) {
//   console.log("Ikkalasi teng");
// }

// <----------------------------------------------------->

// Boolean - 1
// let A = 75;

// if (A > 0) {
//   console.log(true);
// }

// if (A <= 0) {
//   console.log(false);
// }

// Boolean - 2
// let A = 55;

// if (A % 2 !== 0) {
//   console.log(true);
// }

// if (A % 2 === 0) {
//   console.log(false);
// }

// Boolean - 3
// let A = 77;

// if (A % 2 === 0) {
//   console.log(true);
// }

// if (A % 2 !== 0) {
//   console.log(false);
// }

// Boolean - 4
// let A = 20;
// let B = 10;

// if (A > 2 && B <= 3) {
//   console.log(true);
// }

// if (!(A > 2 && B <= 3)) {
//   console.log(false);
// }

// Boolean - 5
// let A = 1;
// let B = 7;

// if (A >= 0 || B < -2) {
//   console.log(true);
// }

// if (!(A >= 0 || B < -2)) {
//   console.log(false);
// }

// Boolean - 6
// let A = 11;
// let B = 55;
// let C = 77;

// if (A <= B && B <= C) {
//   console.log(true);
// }

// if (!(A <= B && B <= C)) {
//   console.log(false);
// }

// Boolean - 7
// let A = 11;
// let B = 55;
// let C = 77;

// if ((A < B && B < C) || (C < B && B < A)) {
//   console.log(true);
// }

// if (!((A < B && B < C) || (C < B && B < A))) {
//   console.log(false);
// }

// Boolean - 8
// let A = 77;
// let B = 55;

// if (A % 2 !== 0 && B % 2 !== 0) {
//   console.log(true);
// }

// if (!(A % 2 !== 0 && B % 2 !== 0)) {
//   console.log(false);
// }

// Boolean - 9
// let A = 77;
// let B = 55;

// if (A % 2 !== 0 || B % 2 !== 0) {
//   console.log(true);
// }

// if (!(A % 2 !== 0 || B % 2 !== 0)) {
//   console.log(false);
// }

// Boolean - 10
// let A = 77;
// let B = 55;

// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0)) {
//   console.log(true);
// }

// if (!((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0))) {
//   console.log(false);
// }
