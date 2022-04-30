import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Weather from './components/weather/weather';
import Forecast from './components/forecast/forecast';


function App() {


  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState(null);
  
  useEffect(() => {

    const getPosition = async () => {

      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        let finalUrl = `${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

        getWeather(finalUrl);
      });}

      else {
        return alert("Need position to work!")
      }

      async function getWeather(url) {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch {
          console.log("error");
        }
      }
    }
    getPosition();
    
  }, [lat, long])

  

  return (
    <div className='App'>
    {data && (
        <>
        <Weather

          data={data} />
        <Forecast

            data={data} />
            </>
      )}
    </div>
  );




}

export default App;
