'use client';

// ** Tailwind and MUI Combined theme version

import {ThemeProvider} from '@mui/material';
import {createContext, useContext, useEffect, useState} from 'react';
import {darkTheme, lightTheme} from '../theme/theme';

type IThemeMode = 'light' | 'dark';

interface IThemeContext {
  mode: IThemeMode;
  toggleTheme: () => void;
}

const ThemeContextProvider = createContext<IThemeContext | undefined>(
  undefined
);

const Providers = ({children}: {children: React.ReactNode}) => {
  const [mode, setMode] = useState<IThemeMode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setMode('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (mode === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setMode('light');
    }
  };

  return (
    <>
      <ThemeContextProvider.Provider value={{mode, toggleTheme}}>
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
          {children}
        </ThemeProvider>
      </ThemeContextProvider.Provider>
    </>
  );
};

export default Providers;

export const useThemeMode = () => {
  const context = useContext(ThemeContextProvider);

  if (!context) {
    throw new Error('UseThemeMode must be used within Provides');
  }

  return context;
};
