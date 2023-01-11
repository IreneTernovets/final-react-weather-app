import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  let fahrenheit = Math.round(props.celsius * 1.8 + 32);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        {props.celsius}{" "}
        <span className="unit">
          °C |{" "}
          <a onClick={showFahrenheit} href="/">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        {fahrenheit}{" "}
        <span className="unit">
          <a onClick={showCelsius} href="/">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
