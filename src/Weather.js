import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import CurrentTemperature from "./CurrentTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      temperature: Math.round(response.data.temperature.current),
      feelsLike: Math.round(response.data.temperature.feels_like),
      clouds: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "ea0o7d08fbf3a9bf31at7403ea5c8b4c";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
          <div className="container py-4 h-100">
            <form
              onSubmit={handleSubmit}
              className="city-search input-group mb-3 w-50"
            >
              <input
                onChange={handleCityChange}
                type="search"
                className="form-control"
                placeholder="Type a city"
              />
              <input
                className="btn search-button"
                type="submit"
                value="Search"
              ></input>
            </form>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div
                  className="card text-white"
                  style={{
                    borderRadius: "40px",
                    overflow: "hidden",
                    border: "none",
                  }}
                >
                  <div className="bg-image" style={{ borderRadius: "35px" }}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                      className="card-img"
                      alt="weather"
                    />
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                    ></div>
                  </div>
                  <div className="card-img-overlay text-dark p-5">
                    <h4 className="mb-0">
                      {weatherData.city}, {weatherData.country}
                    </h4>

                    <p className="display-2 my-3">
                      <CurrentTemperature celsius={weatherData.temperature} />
                    </p>

                    <div className="row">
                      <div className="col">
                        <p className="mb-2">
                          Feels Like: <strong>{weatherData.feelsLike}°C</strong>
                        </p>
                        <h5 className="text-uppercase">{weatherData.clouds}</h5>
                      </div>
                      <div className="col">
                        {" "}
                        <p className="mb-1">
                          Humidity: <strong>{weatherData.humidity}%</strong>
                        </p>
                        <p>
                          Wind: <strong>{weatherData.wind} km/h</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <WeatherForecast />
            <div className="mt-2 text-center">
              <strong>
                <FormattedDate date={weatherData.date} />
              </strong>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
