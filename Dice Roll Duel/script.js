"use strict";
document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;
let score = [],
  tempActivePlayer,
  playing = true;
(score[0] = 0), (score[1] = 0);
let activePlayer = 0;
document.querySelector(".btn--roll").addEventListener("click", function () {
  if (score[activePlayer] >= 50) {
    declareWinner();
  }
  if (playing) {
    let num = Math.trunc(Math.random() * 6 + 1);
    document.querySelector(".dice").src = "dice-" + num + ".png";
    document.querySelector(".dice").classList.remove("hidden");
    if (num !== 1) {
      score[activePlayer] += num;
      document.getElementById("current--" + activePlayer).textContent =
        score[activePlayer];
      tempActivePlayer = activePlayer;
    } else {
      document.getElementById("score--" + activePlayer).textContent = 0;
      document.getElementById("current--" + activePlayer).textContent = 0;

      score[activePlayer] = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      switchToggle();
    }
  }
});
document.querySelector(".btn--hold").addEventListener("click", function () {
  if (playing) {
    if (tempActivePlayer === activePlayer) {
      if (score[activePlayer] >= 50) {
        declareWinner();
      } else {
        document.getElementById("score--" + activePlayer).textContent =
          score[activePlayer];
        document.getElementById("current--" + activePlayer).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        switchToggle();
      }
    }
  }
});
document.querySelector(".btn--new").addEventListener("click", restart);
function switchToggle() {
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}
function restart() {
  tempActivePlayer = 0;
  (score[0] = 0), (score[1] = 0);
  activePlayer = 0;
  playing = true;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".dice").classList.add("hidden");
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
}
function declareWinner() {
  document.querySelector(".dice").classList.add("hidden");
  document.getElementById("score--" + activePlayer).textContent =
    score[activePlayer];
  playing = false;
  document
    .querySelector(".player--" + activePlayer)
    .classList.add("player--winner");
}
