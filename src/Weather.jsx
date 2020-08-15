import React from 'react'
import "./css/weather.css"
import "./css/weather-icons.css";



function Weather({ weatherTemp, weatherDescription, weatherCity, weatherCountry}) {

    return (
        <div className="weatherCard">
            <i className="wi wi-day-sunny"></i>
            <p className="temperature">{weatherTemp}°<span className="tempUnit"> c</span></p>
            <p className="description">{weatherDescription}</p>
            <p className="city">{weatherCity + ", "} <span className="country">{weatherCountry}</span></p>
        </div>
    )
}

export default Weather;