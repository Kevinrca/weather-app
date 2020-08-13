import React from 'react'
import "./css/weather.css"
import weatherIcone from "./images/weather_icones/10d.png"

function Weather() {
    return (
        <div className="weatherCard">
            <img className="weatherIcone" src={weatherIcone} alt="weatherIcone"></img>
            <p className="temperature">21°<span className="tempUnit"> c</span></p>
            <p className="description">Temps clair</p>
            <p className="city">Paris, <span className="country">France</span></p>
        </div>
    )
}

export default Weather;