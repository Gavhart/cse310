document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "9231df8de8bc7a7b3b94005c3c809047";
  const searchButton = document.getElementById("search-button");
  const cityInput = document.getElementById("city-input");
  const weatherInfo = document.getElementById("weather-info");

  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city !== "") {
      fetch(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
      )
        .then((response) => response.json())
        .then((data) => {
          const { name, main, weather } = data;
          const temperature = main.temp;
          const description = weather[0].description;

          weatherInfo.innerHTML = `
                        <h2>${name}</h2>
                        <p>Temperature: ${temperature}°C</p>
                        <p>Description: ${description}</p>
                    `;
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          weatherInfo.innerHTML = "City not found";
        });
    } else {
      weatherInfo.innerHTML = "Please enter a city";
    }
  });
});
