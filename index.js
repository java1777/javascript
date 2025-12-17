// Masala - 1
// function ishora(x) {
//   if (x > 0) {
//     return 1;
//   } else if (x < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// let a = -5;
// let b = 3;
// console.log(ishora(a) + ishora(b));

// Masala - 2
// function ildizi(A, B, C) {
//   let D = B * B - 4 * A * C;

//   if (D > 0) {
//     return 2;
//   } else if (D === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(ildizi(1, -3, 2));

// Masala - 3
// function doiraYuzi(R) {
//   const PI = 3.1415;
//   return PI * R * R;
// }

// console.log(doiraYuzi(2));
// console.log(doiraYuzi(4));
// console.log(doiraYuzi(6));

// Masala - 4
// function daraja(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= 2;
//   }
//   return result;
// }

// console.log(daraja(5));

// Masala - 5
// function EKUB(a, b) {
//   while (b !== 0) {
//     let c = b;
//     b = a % b;
//     a = c;
//   }
//   return a;
// }

// console.log(EKUB(24, 36));

// Masala - 6
// function EKUK1(a, b) {
//   return (a * b) / EKUB(a, b);
// }

// console.log(EKUK1(12, 18));

// Masala - 7
// function daraja1(a, n) {
//   let res = 1;
//   for (let i = 0; i < n; i++) {
//     res *= a;
//   }
//   return res;
// }

// console.log(daraja1(2, 5));

// < Qoradigi misolla >

// Masala - 7
// function eng_katta(a, b, c) {
//   if (a >= b && a >= c) {
//     console.log(a);
//   } else if (b >= a && b >= c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

// eng_katta(5, 12, 9);

// Masala - 8
// function Son(son) {
//   if (son > 0) {
//     console.log("Musbat");
//   } else if (son < 0) {
//     console.log("Manfiy");
//   } else {
//     console.log("No!");
//   }
// }

// Son(5);
// Son(-3);
// Son(0);

// Masala - 9
// function juft_sonlar(start, end) {
//   let count = 0;

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// juft_sonlar(1, 10);
// juft_sonlar(3, 7);
// juft_sonlar(2, 2);
// juft_sonlar(1, 1);

// Masala - 10
// function toq_yigindi(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//   }

//   console.log(sum);
// }

// toq_yigindi(5);
// toq_yigindi(10);
// toq_yigindi(1);
// toq_yigindi(2);

// Masala - 11
// function kiyim_tavsiyosi(temp) {
//   if (temp > 25) {
//     console.log("Yengil kiyining");
//   } else if (temp >= 15 && temp <= 25) {
//     console.log("O'rtacha issiq kiyining");
//   } else if (temp >= 5 && temp < 15) {
//     console.log("Issiq kiyining");
//   } else if (temp >= 0 && temp < 5) {
//     console.log("Juda issiq kiyining");
//   } else {
//     console.log("Yashamen!)");
//   }
// }

// kiyim_tavsiyosi(30);

// Masala - 12
// const faslini_aniqla = function (oy_raqami) {
//   if (oy_raqami === 12 || oy_raqami === 1 || oy_raqami === 2) {
//     console.log("Qish");
//   } else if (oy_raqami === 3 || oy_raqami === 4 || oy_raqami === 5) {
//     console.log("Bahor");
//   } else if (oy_raqami === 6 || oy_raqami === 7 || oy_raqami === 8) {
//     console.log("Yoz");
//   } else if (oy_raqami === 9 || oy_raqami === 10 || oy_raqami === 11) {
//     console.log("Kuz");
//   } else {
//     console.log("Noto'g'ri oy raqami!");
//   }
// };

// faslini_aniqla(7);

// Masala - 13
// const jarima_hisobla = function (limit, tezlik) {
//   let oshish = tezlik - limit;

//   if (oshish > 0) {
//     if (oshish >= 40) {
//       console.log("Katta jarima");
//     } else if (oshish >= 20) {
//       console.log("O'rtacha jarima");
//     } else if (oshish >= 10) {
//       console.log("Kichik jarima");
//     } else {
//       console.log("Ogohlantirish (10 km/s dan kam oshirish)");
//     }
//   } else {
//     console.log("Jarima yo'q (tezlik limitdan yuqori emas)");
//   }
// };

// jarima_hisobla(60, 110);

// Masala - 14
// const chegirmali_narx = function (summa, status) {
//   let chegirma;

//   if (status === "oltin") {
//     chegirma = 15;
//   } else if (status === "kumush") {
//     chegirma = 10;
//   } else if (status === "bronza") {
//     chegirma = 5;
//   } else {
//     chegirma = 0;
//     console.log("Noto'g'ri status! Chegirma qo'llanilmaydi.");
//   }

//   let chegirmaMiqdori = (summa * chegirma) / 100;

//   let yakuniyNarx = summa - chegirmaMiqdori;

//   console.log("Boshlang'ich narx: " + summa + " so'm");
//   console.log("Chegirma foizi: " + chegirma + "%");
//   console.log("Chegirma miqdori: " + chegirmaMiqdori + " so'm");
//   console.log("Yakuniy narx: " + yakuniyNarx + " so'm");

//   return yakuniyNarx;
// };

// chegirmali_narx(100000, "bronza");
