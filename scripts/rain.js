const rainButton = document.querySelector(".additional__button-rain");
const rain = document.querySelector(".rain");
rainButton.addEventListener('click', function () {
  if ((!localStorage.getItem("rain") || localStorage.getItem("rain") === "none")) {
    if (window.innerWidth >= 800) {
      rain.classList.add("rain_open");
      rain.classList.add("rain_animation");
    }
    localStorage.setItem("rain", "raining");
  } else if (localStorage.getItem("rain") === "raining") {
    rain.classList.remove("rain_open");
    rain.classList.remove("rain_animation");
    localStorage.setItem("rain", "none");
  }
})

window.addEventListener('resize', function () {
    if (rain.classList.contains("rain_open")) {
      rain.classList.toggle("rain_animation");
    }
})