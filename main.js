let cardTitle = document.querySelector(".card-title");
let cardContent = document.querySelector(".card-content");
let diceBtn = document.querySelector(".dice-btn");

window.onload = function () {
  advice();
}

function advice() {
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(result => {
    cardTitle.innerHTML = `ADVICE #${result.slip.id}`;
    cardContent.innerHTML = `&ldquo;${result.slip.advice}&rdquo;`;
  })
}

diceBtn.addEventListener("click", () => {
  advice();
})
