// 1. Funksiya yozing u funksiyaga parameter sifatida ism boradi, usha ismga salom bersin.

// const person = {
//   firstName: "Javohir",
//   lastName: "Yunusov",
// };
// function greet(greeting) {
//   console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
// }
// greet.call(person, "Salom");

// 2chi oddiyroq yoli
// function greet(name) {
//   console.log(`Salom, ${name}!`);
// }

// greet("Javohir");

// 2. Funksiya yozing u parameter sifatida odammi yoshini va og'irligini oladi, shu malumotlardan kelib chiqib sog'liq darajasini ayting yomon, o'rtacha, yaxshi so'glom kabi
// function salomatligi(age, weight, height) {
//   const a = weight / (height * height);

//   if (a < 17) {
//     return "Sog'liq darajasi: yomon";
//   } else if (a < 25) {
//     return "Sog'liq darajasi: o'rtacha";
//   } else {
//     return "Sog'liq darajasi: chetki";
//   }
// }

// console.log(salomatligi(28, 70, 1.7));

// 3. Object yarating u obyektn bank hisobi vazifasini bajarsin. deposit qilish uchun, pul yechib olish uchun va hisobni kurish uchun mahsus metodlari bulsin obyektni
// const bh = {
//   balance: 0,
//   deposite(summa) {
//     this.balance += summa;
//     console.log(`Balansingizda ${summa} qoshildi`);
//     return this.balance;
//   },
//   getBalance() {
//     console.log("Sizni hisobisda " + this.balance);
//   },
//   withdraw(summa) {
//     if (this.balance < summa) {
//       console.log("Buncha pulingiz yo'q");
//     } else {
//       this.balance -= summa;
//       console.log(`Balansingizdan ${summa} echildi`);
//     }
//   },
// };
// bh.getBalance();
// bh.deposite(7000);
// bh.deposite(7000);
// bh.getBalance();
// bh.withdraw(50000);
// bh.getBalance();

// 4. Function constructor yarating u har safar chaqirilganda yangi hayvon yaratsin
// const animal1 = new Animal("tiger", 23);
// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
//   this.voice = function () {
//     console.log(this.name + " voice");
//   };
// }
// const hayvon1 = new Animal("Tiger", 23);
// const hayvon2 = new Animal("Dog", 7);

// hayvon2.voice();

// 5. Class yarating u hayvon nomli bulsin va yana 2ta class yarating ular yirtqich va o'txo'r hayvonlarga bulinsin va hayvon clasidan meros olsin. Va 3chala klass bilan ham objectlar yaratib kuring.
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  run() {
    console.log(this.name + " is running");
  }
}

class WildAnimals extends Animal {
  ovQilish() {
    console.log(this.name + " ov qilib yedi");
  }
}

const w1 = new WildAnimals("Pantera", 17);
w1.run();
w1.ovQilish();

class HerbivoresAnimals extends Animal {
  travaYeyish() {
    console.log(this.name + " o't yedi");
  }
}

const h1 = new HerbivoresAnimals("Quyon", 7);

h1.run();
h1.travaYeyish();
