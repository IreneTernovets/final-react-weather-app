import "./WeatherForecast.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  if (loaded) {
    return (
      <div className="WeatherForecast container">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return <WeatherForecastDay key={index} data={dailyForecast} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "ea0o7d08fbf3a9bf31at7403ea5c8b4c";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
