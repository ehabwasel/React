import { useState } from "react";
import Fetch from "./Fetch";

const Search = () => {
  const [cityName, setCityName] = useState();
  const getName = (e) => {
    setCityName(e.target.value);
  };
  return (
    <div className="app_container">
      <input
        className="search"
        type="text "
        placeholder="Write City Name ...."
        onChange={getName}
      />
      <Fetch cityName={cityName} />
    </div>
  );
};

export default Search;
