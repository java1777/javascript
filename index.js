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
//       console.log(i);
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
