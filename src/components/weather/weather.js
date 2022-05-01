import React from 'react';
import moment from 'moment';
import './styles.css';


export default function Weather({ data, metric, imperial }) {

  return (

    <div className='container-main'>

      <div className="weather">
        <p className="header">{data.timezone}</p>

        <div className="flex">
          <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
          <p className="description">{data.current.weather[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp">Temperature: <span>{data.current.temp.toFixed()}°</span></p>
          <p className="temp">Feels like: <span>{data.current.feels_like.toFixed()}°</span></p>
        </div>

        <div className="flex">
          <p className="temp">Wind speed: <span>{data.current.wind_speed.toFixed()} m/s</span></p>
          <p className="temp">Humidity: <span>{data.current.humidity} %</span></p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset">Sunrise: <span>{new Date(data.current.sunrise * 1000).toLocaleTimeString('en-IN')}</span></p>
          <p className="sunrise-sunset">Sunset: <span>{new Date(data.current.sunset * 1000).toLocaleTimeString('en-IN')}</span></p>
        </div>

      </div>

      <div className='buttons'>
        <button className="info outline text-tiny" onClick={metric}>&deg;C</button>
        <span> / </span>
        <button className="info outline text-tiny" onClick={imperial}>°F</button>
      </div>

    </div>
  )
}