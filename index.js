// 1
// const Animal = {
//   type: "animal",
// };

// const Dog = Object.create(Animal);
// Dog.breed = "Avcharka";
// console.log(Dog.type);

// 2
// const Animal = {
//   speak() {
//     return "Animal sound";
//   },
// };

// const Dog = Object.create(Animal);
// Dog.speak = function () {
//   return "Woof woof";
// };

// console.log(Dog.speak());
// console.log(Animal.speak());

// 3
// const Animal = { legs: 4 };
// const Dog = Object.create(Animal);
// Dog.name = "Rex";

// console.log(Dog.hasOwnProperty("name"));
// console.log(Dog.hasOwnProperty("legs"));
// console.log("name" in Dog);
// console.log("legs" in Dog);

// 4
// const Animal = {};
// const Dog = Object.create(Animal);

// console.log(Object.getPrototypeOf(Dog) === Animal);

// 5
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   return `${this.name} makes a sound`;
// };

// const cat = new Animal("Cat");
// console.log(cat.speak());

// 6
// const emptyObj = Object.create(null);
// console.log(emptyObj.toString);

// 7
// const obj = {};
// console.log(obj.__proto__);
// console.log(obj.prototype);

// function Func() {}
// console.log(Func.prototype);
// console.log(Func.__proto__);

// 8
// const Animal = {};
// const dog = Object.create(Animal);

// Animal.speak = function () {
//   return "Sound";
// };

// console.log(dog.speak());

// 9
// const Grandfather = { grandProp: "grand" };
// const Father = Object.create(Grandfather);
// const Son = Object.create(Father);

// console.log(Son.grandProp);

// 10
// const Animal = { sound: "Animal sound" };
// const Dog = Object.create(Animal);
// Dog.sound = "Woof";

// console.log(Dog.sound);
// console.log(Animal.sound);

// 1 Misol - 2chi pdf
// let talabalar = { Anvar: 18, Jamila: 20, Mirza: 19 };

// let talabalarSoni = Object.keys(talabalar).length;
// console.log("Talabalar soni:", talabalarSoni);

// 2
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };

// let narxlarYigindisi = Object.values(mahsulotlar).reduce(
//   (sum, narx) => sum + narx,
//   0
// );
// console.log("Narxlar yig'indisi:", narxlarYigindisi);

// 3
// let jadval = {
//   dushanba: "Matematika",
//   seshanba: "Fizika",
//   chorshanba: "Informatika",
// };

// let kunlar = Object.keys(jadval);
// console.log(kunlar);

// 4
// let shaxs = { ism: "Sanjar", yosh: 25 };

// Object.freeze(shaxs);

// shaxs.ism = "Misha";
// shaxs.yosh = 30;
// shaxs.shahar = "Toshkent";

// console.log(shaxs);

// delete shaxs.ism;
// console.log(shaxs.ism);

// 5
// let vazifalar = { uy_ishi: true, dastur_yaratish: false, sport: true };

// let qiymatlar = Object.values(vazifalar);

// let tugatilgan = qiymatlar.filter((vazifa) => vazifa === true).length;
// let tugatilmagan = qiymatlar.filter((vazifa) => vazifa === false).length;

// console.log(`Tugatilgan: ${tugatilgan}, Tugatilmagan: ${tugatilmagan}`);

// 6
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };

// let filtrlangan = Object.entries(mahsulotlar).filter(
//   ([nomi, narxi]) => narxi > 3000
// );

// let natija = Object.fromEntries(filtrlangan);

// console.log(natija);

// 7
// let sinf = { Ahmad: 15, Mohira: -2, Javohir: 17 };

// let yarosliSinf = Object.entries(sinf).reduce((result, [ism, yosh]) => {
//   if (yosh >= 0) {
//     result[ism] = yosh;
//   }
//   return result;
// }, {});

// console.log(yarosliSinf);

// 8
// let bankHisob = { balans: 500000 };

// Object.defineProperty(bankHisob, "pinCode", {
//   value: "1234",
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// console.log(bankHisob.pinCode);

// bankHisob.pinCode = "5678";
// console.log(bankHisob.pinCode);

// delete bankHisob.pinCode;
// console.log(bankHisob.pinCode);

// for (let key in bankHisob) {
//   console.log(key, ":", bankHisob[key]);
// }

// 9
// let shaxs = {
//   ism: "Laylo",
//   familiya: "Islomova",
//   toliqIsm() {
//     return this.ism + " " + this.familiya;
//   },
// };

// console.log(shaxs.toliqIsm());

// 10
// let qiymatlar = [10, 20, 30];

// function yigindiHisobla(a, b, c) {
//   return a + b + c;
// }

// let natija = yigindiHisobla.call(
//   null,
//   qiymatlar[0],
//   qiymatlar[1],
//   qiymatlar[2]
// );

// console.log("Yig'indi:", natija);

// 11
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };

// function narxniTop(nomi) {
//   return this[nomi];
// }

// let olmaNarxi = narxniTop.bind(mahsulotlar, "olma");

// console.log(olmaNarxi());

// let nokNarxi = narxniTop.bind(mahsulotlar, "nok");
// let bananNarxi = narxniTop.bind(mahsulotlar, "banan");

// console.log(nokNarxi());
// console.log(bananNarxi());

// 12
// let sonlar = [500, 1000, 1500];

// function yigindiniHisobla() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// let natija = yigindiniHisobla.apply(null, sonlar);

// console.log("Yig'indi:", natija);

// 13
// let savdo = {
//   olma: 100,
//   nok: 150,
//   banan: 80,
// };

// savdo.foyda = function () {
//   let jami = 0;
//   for (let key in this) {
//     if (typeof this[key] === "number") {
//       jami += this[key];
//     }
//   }
//   return jami;
// };

// console.log("Foyda:", savdo.foyda());

// 15
// let shaxs1 = { ism: "Olim", yosh: 25 };

// function salomlash() {
//   console.log(`Salom, men ${this.ism}man! Yoshim ${this.yosh}da.`);
// }

// salomlash.call(shaxs1);
