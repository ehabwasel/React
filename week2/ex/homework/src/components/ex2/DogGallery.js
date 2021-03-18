import { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";
const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getDogPhoto = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogPhotos(data.message);
      setLoading(false);
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };
  return (
    <div className="co_container">
      <h1>Random Dog photo</h1>
      <Button onClickEvent={getDogPhoto} />
      {!hasError && loading && <li>lOADIN ....</li>}
      {!hasError && dogPhotos && <DogPhoto dogPhotos={dogPhotos} />}
      {hasError && <li>Failed to get data ....</li>}
    </div>
  );
};

export default DogGallery;
