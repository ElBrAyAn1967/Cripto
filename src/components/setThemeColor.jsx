// components/ThemeContext.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("#E71D36"); // color por defecto

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

