import { useState } from "react";

export const themeHook = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return { theme, toggleTheme };
};
