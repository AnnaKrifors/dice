const diceArr = [
  { name: "dice1", path: "assets/dice1.png" },
  { name: "dice2", path: "assets/dice2.png" },
  { name: "dice3", path: "assets/dice3.png" },
  { name: "dice4", path: "assets/dice4.png" },
  { name: "dice5", path: "assets/dice5.png" },
  { name: "dice6", path: "assets/dice6.png" },
];

const diceImg = document.querySelector(".img1");

function diceImg1(arr) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.style.transform = "rotateX(0deg)";
  setTimeout(() => {
    diceImg.setAttribute("src", arr[randomNumber - 1]["path"]);
    diceImg.style.transform = "rotateX(360deg)";
  }, 300);
  // diceImg.setAttribute("src", arr[randomNumber - 1]["path"]);
}

diceImg.addEventListener("click", function () {
  diceImg1(diceArr);
});
