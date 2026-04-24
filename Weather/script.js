
const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const cityName = document.querySelector("#cityName");
const tempVal = document.querySelector("#tempVal")
const humidity = document.querySelector("#humidity")
const feels_like = document.querySelector("#feels_like")
const wind = document.querySelector("#wind")
const dateBlock = document.querySelector("#dateBlock")
// const country = document.querySelector("#country")
const conditionText = document.querySelector("#conditionText")
const weatherCard = document.querySelector("#weatherCard");
const errorMsg = document.getElementById("errorMsg");



searchBtn.addEventListener("click", () => {
    if (cityInput.value.trim() != "") {
        updateWeather(cityInput.value)
        cityInput.value = "";
        cityInput.blur()
        cityInput.focus()

    }
})

cityInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && cityInput.value.trim() != "") {
        updateWeather(cityInput.value)
        cityInput.value = "";
        cityInput.blur()
    }
})


const apiKey = "a1e18cf20e33c4fff48167f2969bb77b"


function getFetchData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(apiUrl).then((Response) => {
        return Response.json()
    }).then((data) => {
        // console.log(typeof (data.cod));
        
        // console.log(data.cod);
        if (data.cod !== 200 && data.cod !== "200"){
        errorMsg.innerText = "Undefined ❌";
        weatherCard.style.display = "none";
        return;
    } else {
        errorMsg.innerText = "";
        weatherCard.style.display = "block";
    }
        console.log(data);
        
        
        cityName.innerText = data.name;
        // console.log(data);
        tempVal.innerText = data.main.temp;
        humidity.innerText = `${data.main.humidity}%`;
        feels_like.innerText = `${data.main.feels_like}°C`;
        wind.innerText = `${data.wind.speed}Km/h`;
        // country.innerText = `${data.sys.country}`;
        conditionText.innerText = data.weather[0].description;





    }).catch((error) => {
        console.log(error);
        // weatherCard.style.display = "Undefined"

    })
}

function updateWeather(city) {
    const weatherData = getFetchData(city)
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const date = new Date()
    // console.log(date);
    const day = date.getDay()
    const dates = date.getDate()
    const month = date.getMonth()
    dateBlock.innerText = `${dates} ${months[month]},${days[day]}`

}

updateWeather("Nabadwip")





// { "coord": { "lon": 88.3697, "lat": 22.5697 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "base": "stations", "main": { "temp": 305.53, "feels_like": 305.44, "temp_min": 305.53, "temp_max": 305.53, "pressure": 1011, "humidity": 37, "sea_level": 1011, "grnd_level": 1010 }, "visibility": 10000, "wind": { "speed": 1.01, "deg": 66, "gust": 1.45 }, "clouds": { "all": 32 }, "dt": 1772954617, "sys": { "country": "IN", "sunrise": 1772929337, "sunset": 1772971968 }, "timezone": 19800, "id": 1275004, "name": "Kolkata", "cod": 200 }

