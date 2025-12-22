// Masala - 1;
// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   arr.push(i);
// }
// console.log("Birinchi array:", arr);

// let oxirgi = arr.pop();
// arr.push(oxirgi * 2);
// console.log("Oxirgi array:", arr);

// Masala - 2;
// let sozlar = ["Salom", "Dunyo", "Javascript"];
// let arxiv = [];

// let oxirgiSoz = sozlar.pop();
// arxiv.push(oxirgiSoz);

// console.log("So'zlar massivi:", sozlar);
// console.log("Arxiv massivi:", arxiv);

// Masala - 3;
// let a = [7, 12, 3, 9, 5];
// let count = 0;

// while (a.length > 0) {
//   count += a.pop();
// }

// console.log("Yeg'indi:", count);

// Masala - 4;
// let a = ["Ali", "Vali", "Gani"];
// console.log("Boshlang'ich a:", a);

// a.unshift("Eshmat");
// console.log("Eshmat qo'shildi:", a);

// let b = a.shift();
// console.log(b + " xaridni tugatdi");
// console.log("Yakuniy a:", a);

// Masala - 5;
// let a = [10, 20, 30, 40, 50];
// console.log("Boshlang'ich arr:", a);

// let birinchiSon = a.shift();
// a.push(birinchiSon);

// console.log("Yakuniy arr:", a);

// Masala - 6;
// let a = ["Eski 1", "Eski 2", "Eski 3"];
// console.log("Boshlang'ich a:", a);

// function yangiXabarQoshish(xabar) {
//   a.unshift(xabar);
//   if (a.length > 4) {
//     let eskiXabar = a.pop();
//     console.log("O'chirildi:", eskiXabar);
//   }
// }

// yangiXabarQoshish("Yangi xabar 1");
// console.log("Yangi holat:", a);

// yangiXabarQoshish("Yangi xabar 2");
// console.log("Yangi holat:", a);

// Masala - 7;
// let arr = [10, 20, 30, 40, 50];
// console.log("Boshlang'ich array:", arr);

// let index = arr.indexOf(30);
// if (index !== -1) {
//   arr.splice(index, 1, 31, 32);
// }

// console.log("Yakuniy array:", arr);

// Masala - 8;
// let mevalar = ["olma", "banan", "anor", "uzum", "kiwi", "apelsin"];
// console.log("Boshlang'ich mevalar:", mevalar);

// let boshlanishIndexi = Math.floor(mevalar.length / 2) - 1;
// mevalar.splice(boshlanishIndexi, 2);

// console.log("O'chirilgandan keyin:", mevalar);

// Masala - 9;
// let a = [5, -3, 10, -8, 2, -1, 7];
// console.log("Boshlang'ich sonla:", a);

// for (let i = a.length - 1; i >= 0; i--) {
//   if (a[i] < 0) {
//     a.splice(i, 1, 0);
//   }
// }

// console.log("Yakuniy sonla:", a);

// Masala - 10;
// let a = [];
// for (let i = 1; i <= 20; i++) {
//   a.push(i);
// }
// console.log("Hamma sahifalar:", a);

// let b = a.slice(1, 5);
// console.log("O'qilgan sahifalar:", b);

// Masala - 11;
// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log("Original array:", arr);

// let b = arr.slice(-3);
// console.log("Oxirgi 3 ta element:", b);
// console.log("Original array o'zgarmadi:", arr);

// Masala - 12;
// let a = [1, 2, 3, 4, 5];
// console.log("Asl massiv:", a);

// let b = a.slice();
// b.push(6, 7);

// console.log("Nusxa massiv:", b);
// console.log("Asl massiv haliyam:", a);

// Masala - 13;
// let a = [100, 200, 300];
// console.log("Asl narx:", a);

// a.forEach(function (narx) {
//   let chegirma = narx * 0.1;
//   let yengiNarx = narx - chegirma;
//   console.log(narx + " so'mdan " + yengiNarx + " so'mgacha chegirma");
// });

// Masala - 14;
// let a = ["Ali", "Vali", "Guli", "Dilshod"];
// console.log("Ismlar ro'yxati:", a);

// a.forEach(function (ism) {
//   console.log(ism + " - " + ism.length + " harf");
// });

// Masala - 15;
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Berilgan a:", a);

// let juft = 0;

// a.forEach(function (son) {
//   if (son % 2 === 0) {
//     juft += son;
//   }
// });

// console.log("Juft a yig'indisi:", juft);

// Masala - 16;
// let selsiy = [0, 10, 20, 30, 40];
// console.log("Selsiy gradisi:", selsiy);

// let farangeyt = selsiy.map(function (c) {
//   return c * 1.8 + 32;
// });

// console.log("Farangeyt gradisi:", farangeyt);

// Masala - 17;
// let a = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Guli", age: 22 },
// ];
// console.log("Foydalanuvchilar ro'yxati:", a);

// let b = a.map(function (user) {
//   return user.name;
// });

// console.log("Faqat ismla:", b);

// Masala - 18;
// let a = [5, -3, 10, -8, 2, -1, 7];
// console.log("Berilgan sonlar:", a);

// let musbat = a.map(function (son) {
//   return son >= 0 ? son : -son;
// });

// console.log("Musbat qiymatlar:", musbat);

// Masala - 19;
// function salomlashish(ism) {
//   console.log("Salom, " + ism + "! Xush kelibsiz!");
// }

// salomlashish("Ali");

// Masala - 20;
// const hisoblash = function (oylik) {
//   let yillik = oylik * 12;
//   console.log("Yillik maosh: " + yillik + " so'm");
// };

// hisoblash(900000);

// Masala - 21;
// function kopaytirish(x, y) {
//   let natija = x * y;
//   console.log(x + " * " + y + " = " + natija);
//   return natija;
// }

// kopaytirish(4, 5);

// Masala - 22;
// const somga = (dollar) => {
//   const kurs = 12500;
//   let som = dollar * kurs;
//   console.log(dollar + "$ = " + som + " so'm");
//   return som;
// };

// somga(9500);

// Masala - 23;
// const dollarga = (som) => {
//   const kurs = 12500;
//   let dollar = som / kurs;
//   console.log(som + " so'm = " + dollar.toFixed(2) + "$");
//   return dollar;
// };

// dollarga(1100000);

// Masala - 24;
// const masofahisobla = function (tezlik, vaqt) {
//   let masofa = tezlik * vaqt;
//   console.log(
//     tezlik +
//       " km/soat tezlikda " +
//       vaqt +
//       " soatda bosib o'tilgan masofa: " +
//       masofa +
//       " km"
//   );
//   return masofa;
// };

// masofahisobla(60, 2);

// Masala - 25;
// function uzunlik(matn) {
//   let uzunligi = matn.length;
//   console.log(`"${matn}" matnining uzunligi: ${uzunligi} belgi`);
//   return uzunligi;
// }

// uzunlik("Salom dunyo");

// Masala - 26;
// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   console.log(`${n}-fibonacci soni: ${fib[n]}`);
//   return fib[n];
// }

// fibonacci(10);

// Masala - 27;
// let arr = [1, 2, 3, 4, 5];
// let teskari = arr.slice().reverse();
// console.log("Kirish:", arr);
// console.log("Chiqish:", teskari);

// Masala - 28;
// let matn = "hello";
// let kattaMatn = matn.toUpperCase();
// console.log("Kirish:", matn);
// console.log("Chiqish:", kattaMatn);

// Masala - 29;
// let arr = [1, 2, 3];
// let yangiElement = 4;
// arr.push(yangiElement);
// console.log("Kirish:", [1, 2, 3], "yangi element:", yangiElement);
// console.log("Chiqish:", arr);

// Masala - 30;
// let arr = [7, 8, 9];
// let uzunlik = arr.length;
// console.log("Kirish:", arr);
// console.log("Chiqish:", uzunlik);

// Masala - 31;
// let matn = "Hello World";
// let yengi = matn.replace("World", "JavaScript");
// console.log("Kirish:", matn);
// console.log("Chiqish:", yengi);

// Masala - 32;
// let arr = [4, 5, 6];
// let birinchiElement = arr[0];
// console.log("Kirish:", arr);
// console.log("Chiqish:", birinchiElement);
