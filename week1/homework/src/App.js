import HobbyList from "./components/HobbyList";
import Guarantee from "./components/Guarantee";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="header">Hobby List</h1>
      <HobbyList />
      <h1 className="header">Guarantee</h1>
      <Guarantee />
      <h1 className="header">Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
