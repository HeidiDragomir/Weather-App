import React, { useEffect, useState } from "react";
import './App.css';
import Weather from './components/weather/weather'


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setInfo(result)
          
        });
    }
    fetchData();
  }, [lat, long])


  return (
    <div className='App'>
      {(typeof info.list != 'undefined') ? (
        <Weather weatherData={info} />
      ) : (
        <div></div>
      )}
    </div>
  );




}

export default App;
