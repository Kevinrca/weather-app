import React, { useState, Suspense } from 'react'
import "./css/weather.css"
import weatherIcone from "./images/weather_icones/10d.png"



function Weather() {

    const [weatherTemp, getTemp] = useState("-");
    const [weatherDescription, getDescription] = useState("-");
    const [weatherCity, getCity] = useState("-");
    const [weatherCountry, getCountry] = useState("")
    
    async function getWeather(prev) {
        const city = await fetch(`http://ip-api.com/json`)
                        .then(result => result.json())
                        .then(json => json.city);
            
        const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=646d82915c35c27e56f30d7478d9c087`)
                        .then(result => result.json())
                        .then(data => data);
        
        getTemp(prev => prev = Math.floor(weather.main.temp - 273));
        getDescription(prev => prev = weather.weather[0].description);
        getCity(prev => prev = weather.name);
        getCountry(prev => prev = weather.sys.country);
    }
    getWeather();






    return (
        <div className="weatherCard">
            <img className="weatherIcone" src={weatherIcone} alt="weatherIcone"></img>
            <p className="temperature">{weatherTemp}°<span className="tempUnit"> c</span></p>
            <p className="description">{weatherDescription}</p>
    <p className="city">{weatherCity + ", "} <span className="country">{weatherCountry}</span></p>
        </div>
    )
}

export default Weather;