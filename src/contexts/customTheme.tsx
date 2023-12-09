import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useMMKVObject } from 'react-native-mmkv';

const ThemeContext = createContext({});

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fafafa',
    text: '#333',
  },
};

const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    background: '#333',
    text: '#fafafa',
  },
};

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const scheme = useColorScheme();

  const [userPreferences, setUserPreferences] = useMMKVObject<{
    darkMode: boolean;
  }>('userPreferences');

  const [darkMode, setDarkMode] = useState<boolean>(
    userPreferences?.darkMode ?? scheme === 'dark'
  );
  const [palette, setPalette] = useState(
    scheme === 'dark' ? DarkTheme : LightTheme
  );

  const handleThemeToggle = useCallback(() => {
    setDarkMode(!darkMode);
    setPalette(userPreferences?.darkMode ? DarkTheme : LightTheme);
    setUserPreferences({ darkMode: !darkMode });
  }, [darkMode]);

  useEffect(() => {
    if (!userPreferences) {
      setUserPreferences({ darkMode: scheme === 'dark' });
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        handleThemeToggle,
        palette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

interface ThemeContextProps {
  currentTheme: 'dark' | 'light';
  handleThemeToggle(): void;
  palette: typeof LightTheme | typeof DarkTheme;
}

export const useCustomTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  return context as ThemeContextProps;
};

export default ThemeProvider;
