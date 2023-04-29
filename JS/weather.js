const API_KEY = "f505d636297358924ed24a620e96f395"

navigator.geolocation.getCurrentPosition(onGeoGo,onGeoBack)

function onGeoGo (position) {
    const lat = position.coords.latitude
    const log = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`

    fetch(url).then(Response => Response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerHTML = data.name;
        weather.innerHTML = `${data.main.temp}℃, ${data.weather[0].main}`

    }))
}

function onGeoBack () {
    alert("can not find you")
}