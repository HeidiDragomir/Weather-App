import React from "react";
import "./styles.css";

export default function forecast({ data }) {

  function weatherHourly() {
    let hourly = [];
    data.hourly.forEach((item, index) => {
      if (index % 3 === 0 && hourly.length < 5) {
        hourly.push(
        <div className="card-wrapper">
          <div className="card-body">
            <p className="time">{new Date(item.dt * 1000).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather icon"></img>
            <p className="info-main">{item.weather[0].description.toUpperCase()}</p>
            <p className="info-forecast-temp">{item.temp.toFixed()}&deg;</p>
            <p className="info-forecast">{item.wind_speed.toFixed()} m/s</p>
            <p className="info-forecast">{item.humidity} %</p></div></div>)
      }
    })

    return hourly
  }

  function weatherDaily() {
    let daily = [];
    data.daily.forEach((item) => {
      if (daily.length < 6) {
        daily.push(
        <div className="card-wrapper">
          <p className="time">{new Date(item.dt * 1000).toLocaleDateString("en-GB", { weekday: "short", month: "2-digit", day: "2-digit" })}</p>
          <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather icon"></img>
          <p className="info-main">{item.weather[0].main.toUpperCase()}</p>
          <p className="info-forecast-temp">{item.temp.day.toFixed()}&deg;</p>
          <p className="info-forecast">{item.wind_speed.toFixed()} m/s</p>
          <p className="info-forecast">{item.humidity} %</p>
          </div>)
      }
    })
    return daily
  }

  return (
    <>
      <div className="container-hourly ">
        {weatherHourly()}
      </div>
      <div className="container-daily">
        {weatherDaily()}
      </div>
    </>
  )
}
