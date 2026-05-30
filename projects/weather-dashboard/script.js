async function getWeather() {
  let city = document.getElementById("weather-city").value.trim();
  if(!city) return alert("Please fill city!");
  let resDiv = document.getElementById("weather-res");
  resDiv.textContent = "Fetching weather...";
  setTimeout(() => {
    let mockWeather = {
      temp: (15 + Math.random() * 15).toFixed(1),
      humidity: Math.floor(40 + Math.random() * 40),
      desc: ["Sunny", "Partly Cloudy", "Rainy", "Overcast"][Math.floor(Math.random() * 4)]
    };
    resDiv.innerHTML = "<strong>City:</strong> " + city + "<br>" +
                      "<strong>Temperature:</strong> " + mockWeather.temp + "°C<br>" +
                      "<strong>Condition:</strong> " + mockWeather.desc;
  }, 600);
}