import Friend from "./components/ex1/Friend";
import DogGallery from "./components/ex2/DogGallery";
import RandomJoke from "./components/ex3/RandomJoke";
function App() {
  return (
    <div classNameName="container">
      <div>
        <RandomJoke />
        <Friend />
      </div>
      <div>
        <DogGallery />
      </div>
    </div>
  );
}

export default App;
