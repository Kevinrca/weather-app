import React from 'react'
import "./css/weather.css"
import weatherIcone from "./images/weather_icones/10d.png"



function Weather({weatherTemp, weatherDescription, weatherCity, weatherCountry}) {

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