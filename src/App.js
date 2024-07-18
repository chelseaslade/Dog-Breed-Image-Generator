import "./App.css";
import Header from "./components/Header.jsx";
import Dropdown from "./components/dropdown.jsx";
import ImageCount from "./components/imageCount.jsx";

function App() {
  return (
    <div className="container">
      {<Header />}
      {<Dropdown />}
      {<ImageCount />}
    </div>
  );
}

export default App;
