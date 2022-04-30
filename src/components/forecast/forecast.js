import React from 'react';
import './styles.css';

export default function forecast({ data }) {
    
  function weatherHourly() {
    let hourly = []
    data.hourly.forEach((item, index) => {
      if(index % 3 === 0 && hourly.length < 6) {
        hourly.push(<div>
        <p className="time-hourly">{new Date(item.dt * 1000).toLocaleTimeString('en-IN',{ hour: '2-digit', minute: '2-digit' })}</p>
        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
        <p className="main-hourly">{item.weather[0].main}</p>
        <p>{item.temp.toFixed()}°</p>
        <p>{item.wind_speed.toFixed()} m/s</p>
        <p>{item.humidity} %</p></div>)
      } 
    })
    return hourly

  }

  function weatherDaily() {
    let daily = []
    data.daily.forEach((item, index) => {
      if(daily.length < 5) {
        daily.push(<div>
        <p className="time">{new Date(item.dt * 1000).toLocaleDateString('en-IN', {month: '2-digit', day: '2-digit'})}</p>
        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
        <p className="mainweather">{item.weather[0].main}</p>
        <p>{item.temp.day.toFixed()}°</p>
        <p>{item.wind_speed.toFixed()} m/s</p>
        <p>{item.humidity} %</p>
        </div>)
      } 
    })
    return daily
  }

    return (
      <>
      <div className="container-hourly">
        {weatherHourly()}
      </div>
      <div className="container-daily">
          {weatherDaily()}
        </div>
        </>
    )
    
}
