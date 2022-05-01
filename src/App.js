import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/weather/weather";
import Forecast from "./components/forecast/forecast";


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState(null);
  const [units, setUnits] = useState("metric");
  const metric = (e) => {
    setUnits("metric");
  };
  const imperial = (e) => {
    setUnits("imperial");
  };

  useEffect(() => {

    const getPosition = async () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          let apiUrl = `${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&units=${units}&APPID=${process.env.REACT_APP_API_KEY}`;
          getWeather(apiUrl);
        });
      }

      else {
        return alert("You need to let the app use your location!")
      }

    }

    const getWeather = async (url) => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch {
        console.log("error");
      }
    }

    getPosition();

  }, [lat, long, units])

  return (
    <div className="App">
      {data && (
        <>
          <Weather
            metric={metric}
            imperial={imperial}
            data={data} />
          <Forecast
            metric={metric}
            imperial={imperial}
            data={data} />
        </>
      )}
    </div>
  );
}

export default App;
