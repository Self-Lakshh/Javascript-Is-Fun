const citiesData = {
  london: { name: "London, UK", temp: "18°C", desc: "Partly Cloudy", icon: "⛅", humidity: "65%", wind: "12 km/h" },
  tokyo: { name: "Tokyo, Japan", temp: "22°C", desc: "Clear Sunny Sky", icon: "☀️", humidity: "45%", wind: "8 km/h" },
  paris: { name: "Paris, France", temp: "16°C", desc: "Light Showers", icon: "🌧️", humidity: "82%", wind: "15 km/h" },
  newyork: { name: "New York, USA", temp: "20°C", desc: "Windy & Breezy", icon: "💨", humidity: "50%", wind: "24 km/h" }
};

function searchCity(name) {
  document.getElementById("weather-city").value = name;
  fetchMockWeather();
}

function fetchMockWeather() {
  const cityInput = document.getElementById("weather-city");
  const query = cityInput.value.trim().toLowerCase().replace(/\s+/g, '');
  const resBox = document.getElementById("weather-res");
  
  if (!query) return;
  
  resBox.classList.add("hidden");
  
  setTimeout(() => {
    const data = citiesData[query] || {
      name: `${cityInput.value.trim()}, World`,
      temp: `${15 + Math.floor(Math.random() * 15)}°C`,
      desc: "Scattered clouds",
      icon: "☁️",
      humidity: `${50 + Math.floor(Math.random() * 40)}%`,
      wind: `${10 + Math.floor(Math.random() * 20)} km/h`
    };
    
    document.getElementById("res-name").textContent = data.name;
    document.getElementById("res-icon").textContent = data.icon;
    document.getElementById("res-temp").textContent = data.temp;
    document.getElementById("res-desc").textContent = data.desc;
    document.getElementById("res-humidity").textContent = data.humidity;
    document.getElementById("res-wind").textContent = data.wind;
    
    resBox.classList.remove("hidden");
  }, 200);
}