'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTimeBased: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isTimeBased, setIsTimeBased] = useState(true);

  const getTimeBasedTheme = (): Theme => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'dark' : 'light';
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsTimeBased(false);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('isTimeBased', 'false');
  };

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedIsTimeBased = localStorage.getItem('isTimeBased');

    if (savedIsTimeBased === 'false' && savedTheme) {
      setTheme(savedTheme);
      setIsTimeBased(false);
    } else {
      // Use time-based theme
      const timeBasedTheme = getTimeBasedTheme();
      setTheme(timeBasedTheme);
      setIsTimeBased(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Update theme based on time if using time-based theme
  useEffect(() => {
    if (!isTimeBased) return;

    const interval = setInterval(() => {
      const timeBasedTheme = getTimeBasedTheme();
      if (timeBasedTheme !== theme) {
        setTheme(timeBasedTheme);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isTimeBased, theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTimeBased }}>
      {children}
    </ThemeContext.Provider>
  );
};