import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import { ThemeContext } from "./context/theme";
import { useContext, useState } from "react";
const App = () => {
  const thisTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme((prev) => !prev);
    console.log(thisTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "dark-head" : "head"}>
        <h3>Where in the world?</h3>
        <div className="mode" onClick={handleTheme}>
          <img
            src={theme ? "icons/sun-icon.svg" : "icons/moon-icon.svg"}
            alt=""
          />
          <span>Dark Mode</span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
