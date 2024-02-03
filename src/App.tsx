import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import { ThemeContext } from "./context/theme";
import { useContext, useEffect, useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(false);
  const thisTheme = useContext(ThemeContext);

  useEffect(() => {
    console.log("new", thisTheme);
  }, [theme]);
  console.log(thisTheme);
  const handleTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={thisTheme?.theme ? "dark-head" : "head"}>
        <h3>Where in the world?</h3>
        <div className="mode" onClick={handleTheme}>
          <img src="icons/moon-icon.svg" alt="" />
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
