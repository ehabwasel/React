import { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const Fetch = ({ cityName }) => {
  // if (!cityName) {
  //   setHasError(true);
  //   return <p>please write </p>;
  // }
  const [weatherData, setWeatherData] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getCity = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
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
      {!hasError && loading && <li>lOADIN ....</li>}
      {!hasError && weatherData && <Card weatherData={weatherData} />}
      {hasError && <h2>Failed to get data or write correct City Name ....</h2>}
    </div>
  );
};

export default Fetch;
