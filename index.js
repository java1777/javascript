// 1-Misol!
// let a = 17;

// if (a > 0) {
//     a = a + 1;
// } else {

// }

// console.log(a);

// 2-Misol!
// let a = +prompt ("manfiy yo musbat son kiriting!");

// if (a > 0) {
//     a = a + 1;
// } else {
//     a = a - 2;
// }
// console.log(a);

// 3-Misol!
// let a = +prompt("Son kiriting:");

// if (a > 0) a++;
// else if (a < 0) a -= 2;
// else a = 10;

// console.log(a);

// 4-Misol!
// let a = 11;
// let b = -10;
// let c = 17;
// let musbat = 0;
// let manfiy = 0;

// if (a > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// if (b > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// if (c > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// console.log(musbat);

// 5-Misol!
// let a = 11;
// let b = -10;
// let c = 17;
// let musbat = 0;
// let manfiy = 0;

// if (a > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// if (b > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// if (c > 0) {
//     musbat++
// } else {
//     manfiy++
// }
// console.log(musbat , manfiy)

// 6-Misol!
// let a = +prompt("1-sonni kiriting:");
// let b = +prompt("2-sonni kiriting:");

// if (a > b) {
//   console.log("Katta son:", a);
// } else if (b > a) {
//   console.log("Katta son:", b);
// } else {
//   console.log("Ikkala son teng");
// }

// 7-Misol!
// let a = +prompt("1-sonni kiriting:");
// let b = +prompt("2-sonni kiriting:");

// if (a < b) {
//   console.log("Kichik sonning tartib raqami: 1");
// } else if (b < a) {
//   console.log("Kichik sonning tartib raqami: 2");
// } else {
//   console.log("Ikkala son teng, tartib raqami yo");
// }

// 8-Misol!
// let a = +prompt("a:");
// let b = +prompt("b:");

// if (a > b) {
//   console.log(a, b);
// } else if (b > a) {
//   console.log(b, a);
// } else {
//   console.log("Teng");
// }

// 9-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");

// if (A > B) {
//   let temp = A;
//   A = B;
//   B = temp;
// }

// console.log("A =", A, "B =", B);

// 10-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");

// if (A !== B) {
//   let yigindi = A + B;
//   A = yigindi;
//   B = yigindi;
// } else {
//   A = 0;
//   B = 0;
// }

// console.log("A =", A, "B =", B);

// 11-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");

// if (A !== B) {
//   let max = A > B ? A : B;
//   A = max;
//   B = max;
// } else {
//   A = 0;
//   B = 0;
// }

// console.log("A =", A, "B =", B);

// 12-Misol!
// let a = +prompt("a:");
// let b = +prompt("b:");
// let c = +prompt("c:");

// let min = a;

// if (b < min) min = b;
// if (c < min) min = c;

// console.log("Kichik son:", min);

// 13-Misol!
// let a = +prompt("a:");
// let b = +prompt("b:");
// let c = +prompt("c:");

// let orta;

// if ((a > b && a < c) || (a > c && a < b)) orta = a;
// else if ((b > a && b < c) || (b > c && b < a)) orta = b;
// else orta = c;

// console.log("Ortacha son:", orta);

// 14-Misol!
// let a = +prompt("a:");
// let b = +prompt("b:");
// let c = +prompt("c:");

// let min = Math.min(a, b, c);
// let max = Math.max(a, b, c);

// console.log("Kichigi:", min);
// console.log("Kattasi:", max);

// 15-Misol!
// let a = +prompt("a:");
// let b = +prompt("b:");
// let c = +prompt("c:");

// let AB = a + b;
// let AC = a + c;
// let BC = b + c;

// if (AB >= AC && AB >= BC) {
//   console.log("Eng katta yigindi:", a, b);
// } else if (AC >= AB && AC >= BC) {
//   console.log("Eng katta yigindi:", a, c);
// } else {
//   console.log("Eng katta yigindi:", b, c);
// }

// 16-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");
// let C = +prompt("C:");

// if (A < B && B < C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("Natija:", A, B, C);

// 17-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");
// let C = +prompt("C:");

// if (A > B && B > C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("Natija:", A, B, C);

// 18-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");
// let C = +prompt("C:");

// if (A === B && B !== C) {
//   console.log(3);
// } else if (A === C && C !== B) {
//   console.log(2);
// } else if (B === C && A !== B) {
//   console.log(1);
// } else {
//   console.log("Xatolik: Faqat bitta son boshqacha bolishi kerak!");
// }

// 19-Misol!
// let A = +prompt("A:");
// let B = +prompt("B:");
// let C = +prompt("C:");
// let D = +prompt("D:");

// if (A === B && B === C && C !== D) {
//   console.log(4);
// } else if (A === B && B === D && D !== C) {
//   console.log(3);
// } else if (A === C && C === D && D !== B) {
//   console.log(2);
// } else if (B === C && C === D && D !== A) {
//   console.log(1);
// } else {
//   console.log("Xato: uchta son teng bolishi kerak!");
// }

// 20-Misol!
let A = +prompt("A:");
let B = +prompt("B:");
let C = +prompt("C:");

let dB = (A > B) ? A - B : B - A;
let dC = (A > C) ? A - C : C - A;

if (dB < dC) {
  console.log("Eng yaqin nuqta: B");
  console.log("Masofa:", dB);
} else if (dC < dB) {
  console.log("Eng yaqin nuqta: C");
  console.log("Masofa:", dC);
} else {
  console.log("B va C A ga teng masofada.");
  console.log("Masofa:", dB);
}
