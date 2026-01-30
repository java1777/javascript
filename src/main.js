const heart1Element = document.querySelector("#heart1 img");
const heart2Element = document.querySelector("#heart2 img");
const heart3Element = document.querySelector("#heart3 img");
const boxElement = document.querySelectorAll(".box");
const startBtnElement = document.getElementById("start-btn");
const secundomerElement = document.querySelector(".secundomer > p");
const hearts = [heart1Element, heart2Element, heart3Element];

let timerId = null;
let gameId = null;
let lives = 3;

startBtnElement.addEventListener("click", () => {
  startBtnElement.disabled = true;
  secundomerElement.textContent = 3;
  lives = 3;

  hearts.forEach((heart) => (heart.style.opacity = "1"));
  boxElement.forEach((box) => {
    box.innerHTML = "";
    box.onclick = null;
  });

  timerId = setInterval(() => {
    secundomerElement.textContent = parseInt(secundomerElement.textContent) - 1;

    if (parseInt(secundomerElement.textContent) <= 0) {
      clearInterval(timerId);
      secundomerElement.textContent = "GO!";
      startGame();
    }
  }, 1000);
});

function startGame() {
  gameId = setInterval(() => {
    boxElement.forEach((box) => {
      box.innerHTML = "";
      box.onclick = null;
    });

    const randomIndex = Math.floor(Math.random() * boxElement.length);
    const currentBox = boxElement[randomIndex];
    let isHit = false;

    currentBox.innerHTML = `<img src="./src/assets/img/lion.avif" style="width: 100%; height: 100%; object-fit: cover; border-radius: 24px;">`;

    currentBox.onclick = () => {
      if (!isHit) {
        isHit = true;
        currentBox.onclick = null;
        currentBox.innerHTML = "";
      }
    };

    setTimeout(() => {
      if (isHit) return;

      currentBox.innerHTML = "";
      currentBox.onclick = null;
      lives--;

      if (lives >= 0 && lives < hearts.length) {
        hearts[lives].style.opacity = "0.3";
      }

      if (lives <= 0) {
        clearInterval(gameId);
        startBtnElement.disabled = false;
        setTimeout(() => {
          alert("O'yin tugadi! Yana urinib ko'ring.");
          secundomerElement.textContent = "3";
        }, 100);
      }
    }, 1500);
  }, 2000);
}
