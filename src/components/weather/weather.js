import React from 'react';
import moment from 'moment';
import './styles.css';

/* const refresh = () => {
    window.location.reload();
  } */

export default function Weather({ weatherData }) {

    return (
        <div className="main">

      <p className="header">{weatherData.city.name}</p>
      
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.list[0].weather[0].description}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {weatherData.list[0].main.temp} &deg;C</p>
        <p className="temp">Feels like: {weatherData.list[0].main.feels_like} &deg;C</p>
        
      </div>

      <div className="flex">
        <p className="temp">Wind speed: {weatherData.list[0].wind.speed} m/s</p>
        <p className="temp">Humidity: {weatherData.list[0].main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.city.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.city.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
    )
}

//<button className="button"  onClick={refresh} />//