import { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const Fetch = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getCity = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod == 200) {
        setWeatherData(data);
        setLoading(false);
      } else {
        setHasError(true);
      }
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClickEvent={getCity} disabled={!cityName} />
      {!hasError && loading && <p>lOADIN ....</p>}
      {!hasError && weatherData && <Card weatherData={weatherData} />}
      {hasError && <p>Failed to get data or write correct City Name ....</p>}
    </div>
  );
};

export default Fetch;
