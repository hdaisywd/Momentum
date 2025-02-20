const API_KEY = 'cd4d1b0c9829e2354f33e581d9659f7f';

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then(res => res.json())
  .then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} 🌍 ${data.main.temp}🌡`;
  });
}

function onGeoError() {
  alert("Can't find you. No weahter for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);