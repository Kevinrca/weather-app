import React, { useState, useEffect } from 'react';
import Weather from './Weather.jsx';
import './css/App.css';

import unknown from './images/weather_icones/unknown.png';


// http://ip-api.com/json
// http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=646d82915c35c27e56f30d7478d9c087


function App() {

  let city = "Paris";

  const [weather, setWeather] = useState({});


  const search = () => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=646d82915c35c27e56f30d7478d9c087`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
        });
  }

  useEffect(() => {
    search();
  }, [])


  window.addEventListener("keyup", e => {
    e.preventDefault();
    city = "Marseille";
    search();
  })



  return (
    <div className="app">
      <h1 className="websiteTitle" >Weather app</h1>
      {(typeof weather.main !== "undefined") ? (
        <Weather 
        weatherIcon={unknown}
        weatherTemp={Math.floor(weather.main.temp - 273)}
        weatherDescription={weather.weather[0].description}
        weatherCity={weather.name}
        weatherCountry={weather.sys.country} />
      ) : 
        <Weather 
        weatherIcon={unknown}
        weatherTemp="-"
        weatherDescription="-"
        weatherCity="-"
        weatherCountry="-" />
      }
      
    </div>
  );
}

export default App;
