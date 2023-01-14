export default function WeatherForecastDay(props) {
  let tempMax = Math.round(props.data.temperature.maximum);
  let tempMin = Math.round(props.data.temperature.minimum);

  function formateDate() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="forecast-item col">
      <div className="forecast-day">{formateDate()}</div>
      <div className="forecast-icon">
        <img
          className="forecast-icon-img"
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{tempMax}°C</span>
        <span className="forecast-temperature-min">{tempMin}C</span>
      </div>
    </div>
  );
}
