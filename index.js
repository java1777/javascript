// 1-Masala!
// let k = 7;
// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log(k);
    
// }

// 2-Masala!
// let a = 1;
// let b = 11;
// let count = 0;

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
// }
// console.log("Hamma sonlar:", count);

// 3-Masala!
// let a = 1;
// let b = 11;
// let count = 0;

// for (let i = b; i >= a; i--) {
//     console.log(i);
//     count++;
// }
// console.log("Hamma sonlar:", count);

// 4-Masala!
// let price = 17000;

// for (let i = 1; i<= 10; i++) {
//     console.log(i + " kg =", i * price, "som");
    
// }

// 5-Masala!
// let price = 17000;

// for (let i = 0.1; i<=1; i+= 0.1) {
//     console.log(i.toFixed(1) + " kg = ", (i * price).toFixed(0));
// }

// 6-Masala!
// let price = 17000;

// for ( let i = 0.2; i <= 2; i +=0.2) {
//     console.log(i.toFixed(1) + " kg = ", (i * price).toFixed(0));
    
// }

// 7-Masala!
// let a = 1;
// let b = 11;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum +=i;
// }
// console.log("Yig'indi:", sum);

// 8-Masala!
// let a = 2;
// let b = 5;
// let p = 1;

// for (let i = a; i <= b; i++) {
//     p *= i;
// }
// console.log("Kopaytmasi:", p);

// 9-Masala!
// let a = 1;
// let b = 11;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i * i;
// }
// console.log("Kvadratlarini yeg'indisi:", sum);

// 10-Masala!
// let n = 7;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }
// console.log(sum);

// 11-Masala!
// let n = 7;
// let sum = 0;

// for (let i = n; i <= 2 * n; i++) {
//     sum += i * i
// }
// console.log(sum);

// 12-Masala!
// let n = 7;
// let p = 1;

// for (let i = 1; i <= n; i++) {
//     p *= (1 + i / 10);
// }
// console.log(p);

// 13-Masala!
// let n = 7;
// let p = 1;

// for (let i = 1; i<= n; i++) {
//     p *= i;
// }
// console.log(p);

// 14-Masala!
// let n = 7;
// let sum = 0;

// for (let i = 1; i <= 2*n -1; i +=2) {
//     sum += i * i
// }
// console.log(sum);

// 15-Masala!
// let a = 5;
// let n = 7;
// let result = 1;

// for (let i = 0; i < n; i++) {
//     result *= a;
// }

// console.log(result);

// 16-Masala!
// let a = 5;
// let n = 7;
// let daraja = 1;

// for (let i = 1; i <= n; i++) {
//     daraja *= a;
//     console.log(i + "-daraja:", daraja);
// }

// 17-Masala
// let a = 5;
// let n = 7;
// let daraja = 1;
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//     daraja *= a;
//     console.log(i + "-daraja:", daraja);
//     sum += daraja;
// }
// console.log("Yeg'indisi:", sum);

// 18-Masala!
// let a = 5;
// let n = 7;
// let sum = 1;
// let daraja = 1;

// for (let i = 1; i <= n; i++) {
//     daraja *= a;
//     sum += ((-1) **i) * daraja
// }
// console.log("Natijasi:", sum);

// 19-Masala!
// let n = 7;
// let factorial = 1;

// for (let i = 1; i <=n; i++) {
//     factorial *= i;
// }
// console.log("n! =", factorial);

// 20-Masala!
let n = 7;
let factorial = 1;
let sum = 0;

for (let i = 1; i <=n; i++) {
    factorial *= i;
    sum += factorial;
}
console.log("Yeg'indisi", sum);
