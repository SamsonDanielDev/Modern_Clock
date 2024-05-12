const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let clock = setInterval(function time() {
  let Data_atual = new Date();
  let Hour = Data_atual.getHours();
  let Minute = Data_atual.getMinutes();
  let Second = Data_atual.getSeconds();

  if (hours < 10) {
    Hour = "0" + Hour;
  }

  if (Minute < 10) {
    Minute = "0" + Minute;
  }

  if (Second < 10) {
    Second = "0" + Second;
  }

  hours.textContent = Hour;
  minutes.textContent = Minute;
  seconds.textContent = Second;
});
