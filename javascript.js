/**
 * COMO PEGAR OS ELEMENTOS DE UMA PÁGINA
 * document.getElementById
 * document.getElementsByClassName
 * document.querySelector
 * document.querySelectorAll
 */

const tagH1 = document.querySelector("h1");
let tagH2 = document.querySelector("h2");
var tagP = document.querySelector("p");
const btn = document.querySelector("#mudarCor");
const toggle = document.querySelector("#toggleCor");
const size = document.querySelector("#size");

let funcaoEvento = function () {
  tagH1.style.color = "blue";
};

function funcaoToggle() {
  tagH2.classList.toggle("blue");
}

btn.addEventListener("click", funcaoEvento);

toggle.addEventListener("click", funcaoToggle);

size.addEventListener("click", () => {
  document.querySelector("#subtitle").classList.toggle("big");
});

document.querySelector(".sizeP").addEventListener("click", function () {
  document.querySelector("p").classList.toggle("big");
});

document
  .querySelector(".corP")
  .addEventListener("click", () => tagP.classList.toggle("blue"));
