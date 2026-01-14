// 1
// const dollarNarxi = [100, 250, 50, 10];
// const kurs = 12500;

// const somNarxi = dollarNarxi.map((dollar) => dollar * kurs);

// console.log("Dollar:", dollarNarxi);
// console.log("So'm:", somNarxi);

// 2
// const menuElementlar = ["Bosh sahifa", "Xizmatlar", "Aloqa"];

// const htmlList = menuElementlar.map((element) => `<li>${element}</li>`);

// console.log("Original massiv:", menuElementlar);
// console.log("HTML list:", htmlList);

// 3
// const mahsulotlar = [
//   { p: "Sut", n: 12000 },
//   { p: "Go'sht", n: 95000 },
//   { p: "Non", n: 3000 },
// ];

// const qimmatMahsulotlar = mahsulotlar.filter((mahsulot) => mahsulot.n > 20000);

// console.log("Barcha mahsulotlar:", mahsulotlar);
// console.log("20,000 dan qimmat mahsulotlar:", qimmatMahsulotlar);

// 4
// const brendlar = ["Apple", "Samsung", "Vivo", "Artel"];

// const aHarfiBrendlar = brendlar.filter((brend) =>
//   brend.toLowerCase().includes("a")
// );

// console.log("Barcha brendlar:", brendlar);
// console.log("'A' harfi bo'lgan brendlar:", aHarfiBrendlar);

//5
// const ismlar = ["Ali", "Vali", "Guli"];

// console.log("SMS yuborish:");
// ismlar.forEach((ism) => {
//   console.log(`Hurmatli ${ism}, sizning hisobingiz to'ldirildi!`);
// });

// 6
// const nums = [1, 2, 3, 4, 5, 6];

// let sum = 0;

// nums.forEach((son) => {
//   if (son % 2 === 0) {
//     sum += son;
//   }
// });

// console.log("Sonlar massivi:", nums);
// console.log("Juft sonlar yig'indisi:", sum);

// 7
// const mahsulotlar = [
//   { nom: "Kitob", narx: 40000 },
//   { nom: "Ruchka", narx: 2000 },
// ];

// const umumiyNarx = mahsulotlar.reduce((sum, mahsulot) => {
//   return sum + mahsulot.narx;
// }, 0);

// console.log("Mahsulotlar:", mahsulotlar);
// console.log("Umumiy narx:", umumiyNarx);

// 8
// const sonlar = [15, 88, 42, 105, 3];

// const engKattaSon = sonlar.reduce((engKatta, hozirgi) => {
//   return hozirgi > engKatta ? hozirgi : engKatta;
// }, sonlar[0]);

// console.log("Eng katta son:", engKattaSon);

// 9
// const foydalanuvchilar = [
//   { u: "admin", id: 1 },
//   { u: "user1", id: 2 },
//   { u: "user2", id: 3 },
//   { u: "admin", id: 4 },
// ];

// const adminFoydalanuvchi = foydalanuvchilar.find((foydalanuvchi) => {
//   return foydalanuvchi.u === "admin";
// });

// console.log("Foydalanuvchilar ro'yxati:", foydalanuvchilar);
// console.log("Admin foydalanuvchi:", adminFoydalanuvchi);

// 10
// const haroratlar = [15, 12, 0, -5, 2];

// const manfiyHaroratIndeksi = haroratlar.findIndex((harorat) => {
//   return harorat < 0;
// });

// console.log("Haroratlar:", haroratlar);
// console.log("Birinchi manfiy harorat indeksi:", manfiyHaroratIndeksi);

// 11
// const sozlar = ["yaxshi", "zo'r", "yomon_soz", "alo"];

// const taqiqlanganSozMavjud = sozlar.some((soz) => soz === "yomon_soz");

// console.log("Taqiqlangan so'z", taqiqlanganSozMavjud);

// 12
// const yoshlar = [22, 19, 17, 30];

// const hammaVoyagaYetgan = yoshlar.every((yosh) => yosh >= 18);

// console.log("Hamma voyaga yetganmi?:", hammaVoyagaYetgan);

// 13
// const ismlar = ["Zuxra", "Anvar", "Behzod"];

// const tartiblanganIsmlar = [...ismlar].sort();

// console.log("Tartiblangan ismlar:", tartiblanganIsmlar);

// 14
// const rasmlar = ["Rasm1", "Rasm2", "Rasm3"];

// const teskariRasmlar = [...rasmlar].reverse();

// console.log("Teskari tartib:", teskariRasmlar);

// 15
// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8];

// const kesilganQism = sonlar.slice(3, 6);

// console.log("3-indeksidan 6-indeksigacha kesilgan qism:", kesilganQism);

// 16
// const kunlar = ["Dushanba", "Seshanba", "Chorshanba"];

// const olinganElementlar = kunlar.splice(1, 1, "Juma");

// console.log("O'zgartirilgan massiv:", kunlar);

// 17
// const texnologiyalar = ["JS", "React", "Node"];

// const tags = texnologiyalar.join("#");

// console.log(tags);

// 18
// const gap = "Men JavaScript o'rganyapman";

// const sozlar = gap.split(" ");

// console.log("So'zlarga bo'lingan:", sozlar);
