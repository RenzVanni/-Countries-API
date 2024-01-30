import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/country";

const App = () => {
  return (
    <div>
      <div className="head">
        <h3>Where in the world?</h3>
        <div className="mode">
          <img src="icons/moon-icon.svg" alt="" />
          <span>Dark Mode</span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </div>
  );
};

export default App;
