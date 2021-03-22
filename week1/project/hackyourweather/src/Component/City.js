import React from "react";

const City = ({ city }) => {
  return (
    <div className="city_card">
      <h3>
        {` ${city.name}  , 
        ${city.sys.country}`}
      </h3>
      <p>{city.weather[0].main}</p>
      <h5>{city.weather[0].description}</h5>
      <span></span>
      <p> Min Temp : {city.main.temp_min}</p>
      <p> Max Temp : {city.main.temp_max}</p>
      <p> {`Location : ${city.coord.lat} , ${city.coord.lon}`}</p>
    </div>
  );
};

export default City;
