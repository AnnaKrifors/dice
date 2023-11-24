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
  diceImg.setAttribute("src", arr[randomNumber - 1]["path"]);
}

diceImg.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Förhindra standard touch-hantering
  diceImg1(diceArr);
  diceImg.style.transform = "scale(1.5)";
});

diceImg.addEventListener("touchend", function () {
  diceImg.style.transform = "scale(1)";
});

// const diceArr = [
//   { name: "dice1", path: "assets/dice1.png" },
//   { name: "dice2", path: "assets/dice2.png" },
//   { name: "dice3", path: "assets/dice3.png" },
//   { name: "dice4", path: "assets/dice4.png" },
//   { name: "dice5", path: "assets/dice5.png" },
//   { name: "dice6", path: "assets/dice6.png" },
// ];

// const diceImg = document.querySelector(".img1");

// function diceImg1(arr) {
//   const randomNumber = Math.floor(Math.random() * 6) + 1;
//   diceImg.setAttribute("src", arr[randomNumber - 1]["path"]);
// }

// diceImg.addEventListener("click", function () {
//   diceImg1(diceArr);
// });
