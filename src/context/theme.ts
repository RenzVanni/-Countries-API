import { createContext } from "react";

type Props = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Props | undefined>(undefined);
