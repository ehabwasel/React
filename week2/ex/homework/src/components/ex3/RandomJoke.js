import { useState, useEffect } from "react";
import Joke from "./Joke";
const RandomJoke = () => {
  const [joke, setJoke] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getJoke = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setJoke(data);
      setLoading(false);
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getJoke();
  }, []);
  return (
    <div className="co_container">
      {!hasError && loading && <p>lOADIN ....</p>}
      {!hasError && joke && <Joke joke={joke} />}
      {hasError && <p>Failed to get data ....</p>}
    </div>
  );
};

export default RandomJoke;
