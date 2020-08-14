import React, { useState } from 'react';
import Weather from './Weather.jsx';
import './css/App.css';

function App() {

  const [weatherTemp, getTemp] = useState("-");
  const [weatherDescription, getDescription] = useState("-");
  const [weatherCity, getCity] = useState("-");
  const [weatherCountry, getCountry] = useState("")
    
    
  async function getWeather() {
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
    <div className="app">
      <h1 className="websiteTitle">Weather app</h1>
      <Weather 
        weatherTemp={weatherTemp}
        weatherDescription={weatherDescription}
        weatherCity={weatherCity}
        weatherCountry={weatherCountry} />
    </div>
  );
}

export default App;
