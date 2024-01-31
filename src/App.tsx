import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import { ThemeContext } from "./context/theme";
import { useContext, useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(false);
  const thisTheme = useContext(ThemeContext);

  console.log(ThemeContext);
  console.log(theme);
  console.log(thisTheme);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <div className="head">
          <h3>Where in the world?</h3>
          <div className="mode" onClick={() => setTheme((prev) => !prev)}>
            <img src="icons/moon-icon.svg" alt="" />
            <span>Dark Mode</span>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
