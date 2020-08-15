import React, { useState, useEffect } from 'react';
import Weather from './Weather.jsx';
import './css/App.css';

const api = {
  key: "646d82915c35c27e56f30d7478d9c087",
  base: "https://api.openweathermap.org/data/2.5/"
}

// http://ip-api.com/json
// http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=646d82915c35c27e56f30d7478d9c087


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  
  async function getWeather(city) {
    
    await fetch(`${api.base}weather?q=${city}&lang=fr&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery("");
      })
  }

  useEffect(() => {
    fetch(`http://ip-api.com/json`)
    .then(result => result.json())
    .then(json => getWeather(json.city));
  }, []);


  function search(e) {
    if(e.key === "Enter") {
      getWeather(query);
    }
  }


  return (
    <div className="app">
      <h1 className="websiteTitle" >Weather app</h1>

      <div className="searchCity">
        <input 
          type="text"
          className="searchField"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}></input>
          <div className="searchBlur"></div>
      </div>

      {(typeof weather.main !== "undefined") ? (
        <Weather 
        weatherIconID={weather.weather[0].icon}
        weatherTemp={Math.floor(weather.main.temp - 273)}
        weatherDescription={weather.weather[0].description}
        weatherCity={weather.name}
        weatherCountry={weather.sys.country} />
      ) : 

        <Weather 
        weatherTemp="-"
        weatherDescription="-"
        weatherCity="-"
        weatherCountry="-" />
      }
      
    </div>
  );
}

export default App;
