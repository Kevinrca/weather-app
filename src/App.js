import React, { useState, useEffect } from 'react';
import Weather from './Weather.jsx';
import './css/App.css';

import unknown from './images/weather_icones/unknown.png';



function App() {

  const [weatherData, getWeatherData] = useState({});

  async function getWeather() {
    const city = await fetch(`http://ip-api.com/json`)
                  .then(result => result.json())
                  .then(json => json.city);
            
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=646d82915c35c27e56f30d7478d9c087`)
                  .then(result => result.json())
                  .then(data => getWeatherData(data));

    console.log("ok");
  }
  
  //useEffect(() => {
  //  getWeather();
  //}, [weatherData]);


  
  
  return (
    <div className="app">
      <h1 className="websiteTitle" >Weather app</h1>
      
      <Weather 
        weatherIcon={unknown}
        weatherTemp="-"
        weatherDescription="-"
        weatherCity="-"
        weatherCountry="-" />
    </div>
  );
}

export default App;
