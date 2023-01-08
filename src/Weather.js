import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

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

  if (ready) {
    return (
      <div className="Weather">
        <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
          <div className="container py-5 h-100">
            <div className="city-search input-group mb-4 w-50">
              <input
                type="search"
                className="form-control"
                placeholder="Type a city"
              />
              <input
                className="btn search-button"
                type="submit"
                value="Search"
              ></input>
            </div>
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

                    <p className="display-2 my-3 ">
                      {weatherData.temperature}°C
                    </p>

                    <div className="row">
                      <div className="col">
                        <p className="mb-2">
                          Feels Like:{" "}
                          <strong>{weatherData.feelsLike} °C</strong>
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
            <div className="mt-3 text-center">
              <strong>
                <FormattedDate date={weatherData.date} />
              </strong>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "ea0o7d08fbf3a9bf31at7403ea5c8b4c";
    let query = props.defaultCity;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
