import React from "react";

const DogPhoto = ({ dogPhotos }) => {
  return (
    <div className="card" className="card_container">
      <img src={dogPhotos} className="card-img-top" alt="..."></img>
    </div>
  );
};

export default DogPhoto;
