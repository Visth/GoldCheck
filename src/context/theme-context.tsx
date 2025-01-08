import React, { createContext, useState, useContext } from "react";

// Typy dla motywu
type Theme = "light" | "dark";

// Kontekst tematyczny
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "dark", // Domyślny motyw
  toggleTheme: () => {}, // Domyślna funkcja (placeholder)
});

// Provider dla motywu
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook do używania motywu
export const useTheme = () => useContext(ThemeContext);
