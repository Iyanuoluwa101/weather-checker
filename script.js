const apiKey = "b1bfff5c01caad065d171f653f18d5bf";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    // if (data.weather[0].main == "Rain") {
    //   weatherIcon.src = "weather images/rainy.gif";
    // } else if (data.weather[0].main == "Clear") {
    //   weatherIcon.src = "weather images/4814268.png";
    // } else if (data.weather[0].main == "Clouds") {
    //   weatherIcon.src = "weather images/cloud.gif";
    // } else if (data.weather[0].main == "Drizzle") {
    //   weatherIcon.src = "weather images/drizzle.png";
    // }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
