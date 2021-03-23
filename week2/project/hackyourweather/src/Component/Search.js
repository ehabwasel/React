import { useState, useEffect } from "react";
import Card from "./Card";
const API_KEY = "ac8e1426915145ac6c51bf3e3b700400";
const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const setName = (e) => {
    e.preventDefault();
    setUserInput(cityName ? cityName + e.target.value : e.target.value);
  };
  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      setHasError(false);
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setHasError(true);
      }
    } catch (err) {
      setHasError(true);
    } finally {
      setUserInput("");
      setCityName("");
      setLoading(false);
    }
  };
  useEffect(() => {
    async function fetchData() {
      if (cityName) {
        await fetchWeatherData(cityName);
      }
    }
    fetchData();
  }, [cityName]);
  return (
    <div className="app_container">
      <input
        className="search"
        type="text"
        placeholder="Write City Name ...."
        name="cityNameInput"
        value={userInput}
        onChange={setName}
      />
      <button onClick={() => setCityName(userInput)}>Submit</button>
      {!hasError && loading && <li>lOADING ....</li>}
      {!hasError && weatherData && <Card weatherData={weatherData} />}
      {hasError && <h2>Failed to get data or write correct City Name ....</h2>}
    </div>
  );
};
export default Search;
