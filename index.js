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
  console.log(randomNumber);
  diceImg.setAttribute("src", arr[randomNumber - 1]["path"]);

  // Lägg till en klass för att trigga blinkande animation
  diceImg.classList.add("blink");

  // Ta bort klassen efter en kort stund (anpassa vid behov)
  setTimeout(() => {
    diceImg.classList.remove("blink");
  }, 500);
}

diceImg.addEventListener("click", function () {
  diceImg1(diceArr);
});
