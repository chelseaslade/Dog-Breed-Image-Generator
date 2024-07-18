import "./App.css";
import Header from "./components/Header.jsx";
import Dropdown from "./components/dropdown.jsx";

function App() {
  return (
    <div className="header">
      {<Header />}
      {<Dropdown />}
    </div>
  );
}

export default App;
