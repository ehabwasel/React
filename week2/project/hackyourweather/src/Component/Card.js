import React from "react";

const Card = ({ weatherData }) => {
  return (
    <div className="city_card">
      <h3>
        {weatherData.name} {" , "}
        {weatherData.sys.country}
      </h3>
      <p>{weatherData.weather[0].main}</p>
      <div className="info">
        <h5>{weatherData.weather[0].description}</h5>
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
        />

        <span></span>
        <p>
          {" "}
          Min Temp : {Math.round(weatherData.main.temp_min)}
          <sup>&deg;C</sup>
        </p>
        <p>
          {" "}
          Max Temp : {weatherData.main.temp_max}
          <sup>&deg;C</sup>
        </p>
        <p>
          {" "}
          Location : {weatherData.coord.lat} , {weatherData.coord.lon}{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
