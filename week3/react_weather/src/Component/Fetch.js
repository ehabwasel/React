import { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const Fetch = ({ cityName, setCityName }) => {
  const [weatherData, setWeatherData] = useState([]);
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
        setWeatherData([data, ...weatherData]);
        setLoading(false);
        setCityName("");
      } else {
        setHasError(true);
        setLoading(false);
      }
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClickEvent={getCity} disabled={!cityName} />
      {!hasError && loading && <p>LOADIN ....</p>}
      {!hasError && weatherData && (
        <Card weatherData={weatherData} setWeatherData={setWeatherData} cityName={{ cityName }} />
      )}
      {hasError && <p>OOPS!!..Failed to get data or write correct City Name ....</p>}
    </div>
  );
};

export default Fetch;
