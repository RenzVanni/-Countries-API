import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import { ThemeContext } from "./context/theme";
import { useContext, useState } from "react";
const App = () => {
  const thisTheme = useContext(ThemeContext);
  // const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    thisTheme?.setTheme((prev) => !prev);
    console.log(thisTheme);
  };

  return (
    <>
      <div className={thisTheme?.theme ? "dark-head" : "head"}>
        <h3>Where in the world?</h3>
        <div className="mode" onClick={handleTheme}>
          <img
            src={
              thisTheme?.theme ? "icons/sun-icon.svg" : "icons/moon-icon.svg"
            }
            alt=""
          />
          <span>Dark Mode</span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </>
  );
};

export default App;
