import { createContext } from "react";

type Props = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Props | undefined>(undefined);

// export function themeData() {
//   const thisThemeData = useContext(ThemeContext);

//   if (thisThemeData === undefined) {
//     throw new Error("Theme is undefined");
//   }

//   return thisThemeData;
// }
