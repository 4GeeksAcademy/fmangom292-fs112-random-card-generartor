import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  drawCard();

};

function drawCard() {
  let palos = ["♠", "♥", "♦", "♣"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let palo = palos[Math.floor(Math.random() * palos.length)];
  let numero = numeros[Math.floor(Math.random() * numeros.length)];

  let color = palo === "♥" || palo === "♦" ? "red" : "black";

  let cardHeader = document.querySelector(".card-header");
  let cardContent = document.querySelector(".card-content");
  let cardFooter = document.querySelector(".card-footer");

  cardHeader.innerHTML = palo;
  cardHeader.style.color = color;
  cardContent.innerHTML = numero;
  cardContent.style.color = color;
  cardFooter.innerHTML = palo;
  cardFooter.style.color = color;

}

document.querySelector("#card").addEventListener("click", drawCard);