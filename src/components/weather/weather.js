import React from 'react';
import moment from 'moment';
import './styles.css';

/* const refresh = () => {
    window.location.reload();
  } */

export default function Weather({ data }) {

    return (
        <div className="main">

      <p className="header">{data.timezone}</p>
      
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{data.current.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {data.current.temp.toFixed()}°</p>
        <p className="temp">Feels like: {data.current.feels_like.toFixed()}°</p>
        
      </div>

      <div className="flex">
        <p className="temp">Wind speed: {data.current.wind_speed.toFixed()} m/s</p>
        <p className="temp">Humidity: {data.current.humidity}%</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(data.current.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(data.current.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
    )
}

//<button className="button"  onClick={refresh} />//