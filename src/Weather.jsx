import React from 'react'
import "./css/weather.css"



function Weather({weatherIcon, weatherTemp, weatherDescription, weatherCity, weatherCountry}) {

    return (
        <div className="weatherCard">
            <img className="weatherIcone" src={weatherIcon} alt="weatherIcone"></img>
            <p className="temperature">{weatherTemp}°<span className="tempUnit"> c</span></p>
            <p className="description">{weatherDescription}</p>
            <p className="city">{weatherCity + ", "} <span className="country">{weatherCountry}</span></p>
        </div>
    )
}

export default Weather;