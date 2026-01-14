// 1
// function createValidator(pass) {
//   return function (inputPassword) {
//     return inputPassword === pass;
//   };
// }

// const tekshir = createValidator("secret123");
// console.log(tekshir("atidan notori kiritish)"));

// 2
// function createLimitedCall(fn, limit) {
//   let count = 0;

//   return function (...args) {
//     if (count < limit) {
//       count++;
//       return fn(...args);
//     } else {
//       return "Limit tugadi";
//     }
//   };
// }

// function salomBer() {
//   return "Salom!";
// }

// const cheklanganSalom = createLimitedCall(salomBer, 3);

// console.log(cheklanganSalom());
// console.log(cheklanganSalom());
// console.log(cheklanganSalom());
// console.log(cheklanganSalom());

// 4
// function createSentence() {
//   let words = [];

//   return function (word) {
//     if (word) {
//       words.push(word);
//     }
//     return words.join(" ");
//   };
// }

// const addWord = createSentence();
// console.log(addWord("Salom"));
// console.log(addWord("nma"));
// console.log(addWord("gapla"));

// 5
// function guessGame(secretNumber) {
//   let attempts = 0;
//   let gameWon = false;

//   return function (guess) {
//     if (gameWon) {
//       return "Siz allaqachon yutdingiz!";
//     }

//     attempts++;

//     if (guess === secretNumber) {
//       gameWon = true;
//       return `Tabriklaymiz! ${attempts} urinishda topdingiz!`;
//     } else if (guess < secretNumber) {
//       return `Kichikroq. Urinishlar: ${attempts}`;
//     } else {
//       return `Kattaroq. Urinishlar: ${attempts}`;
//     }
//   };
// }

// const game = guessGame(42);
// console.log(game(10));
// console.log(game(50));
// console.log(game(42));
// console.log(game(30));

// 6
// function createAverageCalculator() {
//   let sum = 0;
//   let count = 0;

//   return function (num) {
//     if (typeof num === "number") {
//       sum += num;
//       count++;
//     }

//     if (count === 0) {
//       return "Hech qanday son kiritilmagan";
//     }

//     const average = sum / count;
//     return {
//       average: average,
//       sum: sum,
//       count: count,
//       message: `O'rtacha: ${average.toFixed(
//         2
//       )} (${count} ta son, jami: ${sum})`,
//     };
//   };
// }

// const calc = createAverageCalculator();
// console.log(calc(10));
// console.log(calc(20));

// 7
// function colorGenerator(colorsArray) {
//   let currentIndex = 0;

//   return function () {
//     if (colorsArray.length === 0) {
//       return "Ranglar ro'yxati bo'sh";
//     }

//     const color = colorsArray[currentIndex];
//     currentIndex = (currentIndex + 1) % colorsArray.length;

//     return {
//       color: color,
//       index: currentIndex === 0 ? colorsArray.length : currentIndex,
//       total: colorsArray.length,
//       message: `Rang: ${color} (${
//         currentIndex === 0 ? colorsArray.length : currentIndex
//       }/${colorsArray.length})`,
//     };
//   };
// }

// const getColor = colorGenerator(["qizil", "yashil", "ko'k", "sariq"]);
// console.log(getColor());
// console.log(getColor());

// 8
// function createTimer() {
//   const startTime = Date.now();

//   return function () {
//     const currentTime = Date.now();
//     const elapsed = currentTime - startTime;

//     const seconds = Math.floor(elapsed / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);

//     return {
//       milliseconds: elapsed,
//       seconds: seconds,
//       minutes: minutes,
//       hours: hours,
//       formatted: formatTime(elapsed),
//       startTime: new Date(startTime).toLocaleTimeString(),
//       currentTime: new Date(currentTime).toLocaleTimeString(),
//     };
//   };

//   function formatTime(ms) {
//     const sec = Math.floor(ms / 1000);
//     const min = Math.floor(sec / 60);
//     const hour = Math.floor(min / 60);

//     return `${hour.toString().padStart(2, "0")}:${(min % 60)
//       .toString()
//       .padStart(2, "0")}:${(sec % 60).toString().padStart(2, "0")}.${(ms % 1000)
//       .toString()
//       .padStart(3, "0")}`;
//   }
// }

// const getElapsedTime = createTimer();

// setTimeout(() => {
//   console.log(getElapsedTime());
// }, 2000);

// 9
// function createPrefix(prefix) {
//   return function (word) {
//     return `${prefix}${word}`;
//   };
// }

// const helloer = createPrefix("Salom ");
// console.log(helloer("Misha"));

// 10
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(1)(5)(10));
