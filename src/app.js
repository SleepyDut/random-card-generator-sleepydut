import "bootstrap";
import "./style.css";

let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let symbols = ["♦", "♥", "♠", "♣"];

window.onload = function () {

  // Genera un numero/letra random
  let randNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const generadosNumber = document.getElementsByClassName('centro');

  for (let i = 0; i < generadosNumber.length; i++) {
    generadosNumber[i].innerText = randNumber;
  }

  // Genera un palo random
  let randSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const generadosPalos = document.getElementsByClassName('palos');

  for (let i = 0; i < generadosPalos.length; i++) {
    generadosPalos[i].innerText = randSymbol;
    // establece un condicional para ponerlo de un color
    if (generadosPalos[i].innerText === "♦" || generadosPalos[i].innerText === "♥") {
      generadosPalos[i].style.color = "red";
    }
  }
};


