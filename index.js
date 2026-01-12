const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");

const btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

let isX = true;

const arr = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    let row;
    let col;

    if (index < 3) {
      row = 0;
      col = index;
    } else if (index < 6) {
      row = 1;
      col = index - 3;
    } else {
      row = 2;
      col = index - 6;
    }

    console.log("row " + row);
    console.log("col " + col);

    arr[row][col] = isX ? "X" : "O";

    item.textContent = isX ? "X" : "O";
    isX = !isX;
    item.disabled = true;
  });
});
