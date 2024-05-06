const rainButton = document.querySelector(".additional__button-rain");
const rain = document.querySelector(".rain");
rainButton.addEventListener('click', function () {
  rain.classList.toggle('rain_open');
})

window.addEventListener('resize', function () {
    if (rain.classList.contains("rain_open")) {
      rain.classList.toggle("rain_animation");
    }
})