function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather");
        const cityName = data.name;
        const condition = data.weather[0].main.toLowerCase();
        const conditionClass = `weather-condition-${condition}`;
        weather.innerHTML = `It is <span class = "${conditionClass}">${condition}</span> in ${cityName}!`;
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);