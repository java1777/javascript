// Takrorlash topshiriqlar:

// 1. prompt orqali foydalanuvchidan yoshini so'rang,
// agar U 16 yoshdan kichik bo'lsa, "sizga mumkin emas"  deb alert chiqsin, aks holda "xush kelibsiz" desin, agar yoshini emas boshqa narsa kiritsa(masalan: 150, -9, salom) yoshni no'to'g'ri kiritding, qayta kirit deb yana prompt chiqsin, va bu safar to'g'ri kiritsa yuqoridagi logika ishlasin.

// let age = prompt("Yoshingizni kiriting");

// if (isNaN(age) || age <= 0 || age > 100) {
//   age = prompt("Yoshingizni noto'g'ri kiritdingiz, qayta kiriting:");

//   if (isNaN(age) || age <= 0 || age > 100) {
//     alert("Yana noto'g'ri kiritdingiz!");
//   } else if (age < 16) {
//     alert("Sizga mumkin emas");
//   } else {
//     alert("Xush kelibsiz");
//   }
// } else if (age < 16) {
//   alert("Sizga mumkin emas");
// } else {
//   alert("Xush kelibsiz");
// }

// 2. prompt orqali foydalanuvchidan dekabr oyining kunini kiritishni so'rang, va o'sha kun qaysi hafta kuniga to'g'ri kelsa ekranga o'sha hafta kunini chiqaring. masalan 3 kiritsam chorshanba chiqishi kerak, chunki bu yil 3-dekabr chorshanbaga teng. Switch case bilan qilinsin.

// let day = +prompt("Dekabr oyining kunini kiriting (1-31):");
// if (isNaN(day) || day < 1 || day > 31) {
//   alert("Notog'ri kun kiritdingiz");
// } else {
//   let week = (day - 1) % 7;

//   switch (week) {
//     case 0:
//       alert("Dushanba");
//       break;
//     case 1:
//       alert("Seshanba");
//       break;
//     case 2:
//       alert("Chorshanba");
//       break;
//     case 3:
//       alert("Payshanba");
//       break;
//     case 4:
//       alert("Juma");
//       break;
//     case 5:
//       alert("Shanba");
//       break;
//     case 6:
//       alert("Yakshanba");
//       break;
//   }
// }

// 3. promptdan foydalanuvchidan yil kiritishini so'rang, va  o'sha foydalanuvchi kiritgan yilgacha bo'lgan kabisa yillarni 1 - yildan boshlab chiqarib bering. Masalan 30 kiritsam, consolega 4, 8, 12, 16, 20, 24 lar chiqishi kerak, chunki bular kabisa yillari.

// let year = +prompt("Yil kiriting:");

// if (isNaN(year) || year <= 0) {
//   alert("Yil notog'ri kiritildi! Kozini och");
// } else {
//   for (let i = 1997; i <= year; i++) {
//     if (i % 4 === 0) {
//       alert(i);
//     }
//   }
// }

// Case - 1
// let day = +prompt("Xafta kunini kiriting (1-7):");
// if (isNaN(day) || day < 1 || day > 7) {
//   alert("Notog'ri kun kiritdingiz");
// } else {
//   let week = (day - 1) % 7;

//   switch (week) {
//     case 0:
//       alert("Dushanba");
//       break;
//     case 1:
//       alert("Seshanba");
//       break;
//     case 2:
//       alert("Chorshanba");
//       break;
//     case 3:
//       alert("Payshanba");
//       break;
//     case 4:
//       alert("Juma");
//       break;
//     case 5:
//       alert("Shanba");
//       break;
//     case 6:
//       alert("Yakshanba");
//       break;
//   }
// }

// Case - 2
// let k = +prompt("1-5 gacha baho kiriting");

// switch (k) {
//   case 1:
//     alert("Yomon, oqisen bomidimi?!");
//     break;
//   case 2:
//     alert("Qoniqarsiz, bosib oqisen qoniqarli boladi!)");
//     break;
//   case 3:
//     alert("Qoniqarli, yaxshi oqishi boshlapsan lekin kam!");
//     break;
//   case 4:
//     alert("Yaxshi, lekin bundanam a'lo bolishi mumkin, gazini bos!");
//     break;
//   case 5:
//     alert("A'lo, maladec!");
//     break;
//   default:
//     alert("1-5 orasida baho kiriting!");
// }

// Case - 3
// let month = +prompt("Oy raqamini kiriting");

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     alert("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Kuz");
//     break;
//   default:
//     alert("1-12 orasida son kirgizing!");
// }

// Case - 4
// let m = +prompt("Oy raqamini kiriting (1-12");

// switch (m) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     alert("31-kun");
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     alert("30-kun");
//     break;

//   case 2:
//     alert("28 yoki 29 kun");
//     break;

//   default:
//     alert("Notog'ri oy!");
// }

// Case - 5
// let a = +prompt("a soni:");
// let b = +prompt("b soni:");
// let op = +prompt("Amalni tanlang: 1-plus, 2-minus, 3-bolish, 4-kopaytirish");

// switch (op) {
//   case 1:
//     alert(a + b);
//     break;
//   case 2:
//     alert(a - b);
//     break;
//   case 3:
//     alert(a / b);
//     break;
//   case 4:
//     alert(a * b);
//     break;
//   default:
//     alert("1-4 orasida amal tanlang!");
// }

// Case - 6
// let unit = +prompt("Birlikni kiriting (1–5)");
// let x = +prompt("Qiymatni kiriting");

// switch (unit) {
//   case 1:
//     alert(x / 10 + " metr");
//     break;
//   case 2:
//     alert(x * 1000 + " metr");
//     break;
//   case 3:
//     alert(x + " metr");
//     break;
//   case 4:
//     alert(x / 1000 + " metr");
//     break;
//   case 5:
//     alert(x / 100 + " metr");
//     break;
//   default:
//     alert("1–5 orasida birlik tanlang!");
// }

// Case - 7
// let u = +prompt("Birlikni kiriting (1–5)");
// let w = +prompt("Qiymatni kiriting");

// switch (u) {
//   case 1:
//     alert(w + " kg");
//     break;
//   case 2:
//     alert(w / 1_000_000 + " kg");
//     break;
//   case 3:
//     alert(w / 1000 + " kg");
//     break;
//   case 4:
//     alert(w * 1000 + " kg");
//     break;
//   case 5:
//     alert(w * 100 + " kg");
//     break;
//   default:
//     alert("1–5 orasida tanlang!");
// }

// Case - 8
// let D = +prompt("Kunni kiriting");
// let M = +prompt("Oyni kiriting");

// let days = 0;

// switch (M) {
//   case 12:
//     days += 30;
//   case 11:
//     days += 31;
//   case 10:
//     days += 30;
//   case 9:
//     days += 31;
//   case 8:
//     days += 31;
//   case 7:
//     days += 30;
//   case 6:
//     days += 31;
//   case 5:
//     days += 30;
//   case 4:
//     days += 31;
//   case 3:
//     days += 28;
//   case 2:
//     days += 31;
//   case 1:
//     break;
//   default:
//     alert("Xato oy!");
// }

// days += D;

// alert("Yil boshidan beri: " + days + " kun");

// While - 1
// let a = +prompt("a:");
// let b = +prompt("b:");
// let count = 0;

// while (a >= b) {
//   a = a - b;
//   count++;
// }
// alert("Bosh qismi: " + a + ", Joylashgan son:" + count);

// While - 2
// let a = +prompt("a:");
// let b = +prompt("b:");
// let count = 0;

// while (a >= b) {
//   a -= b;
//   count++;
// }
// alert("Obshiy B lani soni: " + count);

// While - 3
// let N = +prompt("N:");
// let K = +prompt("K:");
// let count = 0;

// while (N >= K) {
//   N -= K;
//   count++;
// }
// alert("Butun qismi: " + count + ", Qoldig'i: " + N);

// While - 4
// let n = +prompt("n:");
// let x = 1;

// while (x < n) {
//   x = x * 3;
// }

// if (x === n) {
//   alert("3 ning darajasi");
// } else {
//   alert("3 ning darajasimas");
// }

// While - 5
// let n = +prompt("n:");
// let k = 0;
// let x = 1;

// while (x < n) {
//   x = x * 2;
//   k++;
// }
// alert("k = " + k);

// While - 6
// let n = +prompt("n:");
// let a = 1;

// while (n > 1) {
//   a *= n;
//   n -= 2;
// }
// alert("Natija:" + a);

// While - 7
// let n = +prompt("n:");
// let k = 1;

// while (k * k <= n) {
//   k++;
// }
// alert("k = " + k);

// While - 8
// let n = +prompt("n:");

// let k = 1;

// while ((k + 1) * (k + 1) <= n) {
//   k++;
// }

// alert("k = " + k);

// While - 9
// let n = +prompt("n:");

// let k = 0;
// let x = 1;

// while (x <= n) {
//   x = x * 3;
//   k++;
// }

// alert("k = " + k);

// While - 11
// let n = +prompt("n:");

// let k = 0;
// let sum = 0;

// while (sum < n) {
//   k++;
//   sum += k;
// }

// alert("k = " + k + ", Yig'indi: " + sum);

// While - 12
// let n = +prompt("n:");

// let k = 0;
// let sum = 0;

// while (sum + (k + 1) <= n) {
//   k++;
//   sum += k;
// }

// alert("k = " + k + ", Yig'indi: " + sum);

// While - 13
// let A = +prompt("A:");

// let k = 0;
// let sum = 0;

// while (sum < A) {
//   k++;
//   sum += 1 / k;
// }

// alert("k = " + k + ", Yig'indi: " + sum);

// While - 14
// let A = +prompt("A:");

// let k = 0;
// let sum = 0;

// while (sum + 1 / (k + 1) <= A) {
//   k++;
//   sum += 1 / k;
// }

// alert("k = " + k + ", Yig'indi: " + sum);

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

// console.log("Natija: " + kun + " kundan keyin 200 km dan oshadi");
// console.log("Jami masofa: " + jami.toFixed(2) + " km");

// While - 17
// let n = 123;
// let sum = 0;

// while (n > 0) {
//   console.log(n % 10);

//   sum += n % 10;

//   n = parseInt(n / 10);
// }

// if (sum > 0) {
//   console.log("Raqamlar yig'indisi:", sum);
// } else {
//   console.log("Hisoblab bo'lmadi");
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

// While - 24
// let n = 34;
// let f1 = 1;
// let f2 = 1;

// let topildimi = false;

// while (f2 <= n) {
//   if (f2 === n) {
//     topildimi = true;
//     break;
//   }
//   let keyingi = f1 + f2;
//   f1 = f2;
//   f2 = keyingi;
// }

// if (topildimi) {
//   console.log("Fibonacci son!");
// } else {
//   console.log("Fibonacci emas!");
// }

// While - 25
// let n = 34;
// let f1 = 1;
// let f2 = 1;

// while (f2 <= n) {
//   let keyingi = f1 + f2;
//   f1 = f2;
//   f2 = keyingi;
// }

// console.log("n dan katta birinchi Fibonacci son =", f2);

// While - 26
// let n = 34;
// let f1 = 1;
// let f2 = 1;

// while (f2 <= n) {
//   let keyingi = f1 + f2;
//   f1 = f2;
//   f2 = keyingi;
// }

// console.log("Oldingi Fibonaci:", f1);
// console.log("Keyingi Fibonaci:", f2);

// While - 27
// let n = 34;
// let f1 = 1;
// let f2 = 1;
// let k = 2;

// while (f2 < n) {
//   let keyingi = f1 + f2;
//   f1 = f2;
//   f2 = keyingi;
//   k++;
// }

// if (f2 === n) {
//   console.log("Bu Fibonacci sonining tartib raqami =", k);
// } else {
//   console.log("Bu Fibonacci son emas!");
// }
