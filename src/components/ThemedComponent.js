import React, { useContext, useState, createContext } from 'react';

// Tworzymy kontekst
const ThemeContext = createContext();

// Komponent, który dostarcza wartość kontekstu
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h2>Aktualny motyw: {theme}</h2>
      <button onClick={toggleTheme}>Zmień motyw</button>
    </div>
  );
};

// Aplikacja główna
const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
