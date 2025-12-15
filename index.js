// 1. Promptdan foydalanuvchi vesini so'rang, agar 90 kgdan ko'p bo'lsa, dieta qiling desin, agar 70 kgdan kam bo'lsa ko'proq ovqat yeng desin, agar boshqa variantlarda yaxshi desin.

// let a = +prompt("kg kirgiz");

// if (a >= 90) {
//   console.log("dieta qiling");
// } else if (a <= 70) {
//   console.log("ko'proq ovqat yeng");
// } else {
//   console.log("yaxshi");
// }

// 2. N berilgan 1dan n gacha raqamlar orasidagi juft sonlarning yigindisini hisoblab bering.

// Masalan n=6 busa 1 + 2 + 3 + 4 + 5 qoshib 15 chiqadi.

// let n = 6;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// 3. N berilgan n gacha bo'lgan raqamlarning orasidan toqlarni kvadratini olib array yasab bering va u arrayning har bir azosini teskari tarzda, yani eng oxirgisidan boshlab, ekranga chiqaring.

// let N3 = 10;
// let toqK = 0;
// let arr = [];
// for (let i = 0; i <= N3; i++) {
//   if (i % 2 != 0) {
//     toqK = i ** 2;
//     arr.unshift(toqK);
//   }
// }
// console.log("Toq sonlar kvadrati", arr);
