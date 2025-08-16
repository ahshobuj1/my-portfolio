// !!! Only for tailwind css theme version

'use client';

import {createContext, useContext, useEffect, useState} from 'react';

type ITheme = 'light' | 'dark';

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
  setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProviders = ({children}: {children: React.ReactNode}) => {
  const [theme, setThemeState] = useState<ITheme>('light');
  const [mounted, setMounted] = useState(false);

  // update the theme
  const setTheme = (newTheme: ITheme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ITheme | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    const initialTheme = savedTheme || systemTheme;

    setThemeState(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return theme;
};
