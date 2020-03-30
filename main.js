let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hoursHand = document.querySelector(".hour-hand");

function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let mins = now.getMinutes();
  let minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  let hours = now.getHours();
  let hoursDegrees = (hours / 60) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000);
