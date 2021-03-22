import { useState } from "react";
import Fetch from "./Fetch";

const Search = () => {
  const [cityName, setCityName] = useState();
  const getName = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };
  return (
    <div className="app_container">
      <form>
        <input
          className="search"
          type="text"
          placeholder="Write City Name ...."
          onChange={getName}
          value={cityName}
        />
        {/* {setCityName("")} */}
      </form>

      <Fetch cityName={cityName} />
    </div>
  );
};

export default Search;
