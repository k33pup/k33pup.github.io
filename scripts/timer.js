let countDownDate = new Date("2024-06-21T12:00:00.000Z").getTime();
let now = new Date().getTime();
let distance = countDownDate - now;
let days, hours, minutes, seconds;

setInterval(() => {
  now = new Date().getTime();
  distance = countDownDate - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "До последнего экзамена: " + days + " дней " + hours + " часов "
       + minutes + " минут " + seconds + " секунд";
}, 1000);
