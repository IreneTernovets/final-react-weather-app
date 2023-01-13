import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let apiKey = "ea0o7d08fbf3a9bf31at7403ea5c8b4c";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast container">
      <div className="row">
        <div className="forecast-item col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src="#" alt="forecast-icon" />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19°C</span>
            <span className="forecast-temperature-min">10°C</span>
          </div>
        </div>
        <div className="forecast-item col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src="#" alt="forecast-icon" />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19°C</span>
            <span className="forecast-temperature-min">10°C</span>
          </div>
        </div>
        <div className="forecast-item col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src="#" alt="forecast-icon" />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19°C</span>
            <span className="forecast-temperature-min">10°C</span>
          </div>
        </div>
        <div className="forecast-item col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src="#" alt="forecast-icon" />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19°C</span>
            <span className="forecast-temperature-min">10°C</span>
          </div>
        </div>
        <div className="forecast-item col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src="#" alt="forecast-icon" />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19°C</span>
            <span className="forecast-temperature-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
