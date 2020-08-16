import React from 'react'
import "./css/weather.css"
import "./css/weather-icons.css";




let currentIcon;

function getIcon(icon) {
    switch(true) {
        default:
            currentIcon = "wi-day-cloudy";
            break;

        case(icon === "01d" || icon === "01n"):
            currentIcon = "wi-day-sunny";
            break;
            
        case(icon === "02d" || icon === "02n"):
            currentIcon = "wi-day-cloudy";
            break;

        case(icon === "03d" || icon === "03n"):
            currentIcon = "wi-cloud";
            break;
        
        case(icon === "04d" || icon === "04n"):
            currentIcon = "wi-cloudy";
            break;
        
        case(icon === "09d" || icon === "09n"):
            currentIcon = "wi-showers";
            break;

        case(icon === "10d" || icon === "10n"):
            currentIcon = "wi-rain";
            break;

        case(icon === "11d" || icon === "11n"):
            currentIcon = "wi-thunderstorm";
            break;

        case(icon === "13d" || icon === "13n"):
            currentIcon = "wi-snow";
            break;

        case(icon === "50d" || icon === "50n"):
            currentIcon = "wi-fog";
            break;
    }
}






function Weather({weatherIconID, weatherTemp, weatherDescription, weatherCity, weatherCountry}) {

    getIcon(weatherIconID);

    return (
        <div className="weatherCard">
            <i className={"wi " + currentIcon}></i>
            <p className="temperature">{weatherTemp}°<span className="tempUnit"> c</span></p>
            <p className="description">{weatherDescription}</p>
            <p className="city">{weatherCity + ", "} <span className="country">{weatherCountry}</span></p>
            <div className="blurBackground"></div>
        </div>
    )
}

export default Weather;