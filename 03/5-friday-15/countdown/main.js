const tick = 1 * 1000;
let secondsLeft = 3;
let displayEl = document.querySelector("h1");

updateDisplay(secondsLeft);

function updateDisplay(msg) {
  displayEl.innerHTML = msg
}

let intervalID = window.setInterval(subtractFromCountdown, tick)

function subtractFromCountdown() {
  secondsLeft -= 1;
  updateDisplay(secondsLeft);

  if (secondsLeft === 0) {
    window.clearInterval(intervalID);
    let body = document.querySelector("body")
    body.style.backgroundColor = "red";
    body.style.color = "white";
    updateDisplay("💥 Boom 💥");
  }
}
