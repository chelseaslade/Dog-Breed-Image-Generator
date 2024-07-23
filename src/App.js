import "./App.css";
import Header from "./components/Header.jsx";
import BreedList from "./components/BreedList.jsx";

function App() {
  return (
    <div className="container">
      {<Header />}
      {<BreedList />}
    </div>
  );
}

export default App;
