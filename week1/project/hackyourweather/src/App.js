import "./App.css";
import cityJson from "./city-weather.json";
import uuid from "react-uuid";
import City from "./Component/City";

function App() {
  return (
    <div className="main">
      <h1>Weather</h1>
      {cityJson.map((city) => (
        <City city={city} key={uuid()} />
      ))}
    </div>
  );
}

export default App;
