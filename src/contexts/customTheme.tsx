import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from 'react';

import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useMMKVObject } from 'react-native-mmkv';

import { storage } from '../storage';

export const ThemeContext = createContext({} as ThemeContextProps);

const fonts = {
  family: {
    extraBold: 'NunitoSansExtraBold',
    bold: 'NunitoSansBold',
    regular: 'NunitoSansRegular',
    light: 'NunitoSansLight',
    medium: 'NunitoSansMedium',
  },
  sizes: {
    title: 32,
    subtitle: 24,
    regular: 16,
    medium: 14,
    tiny: 12,
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f2f2f2',
    text: '#111',
    statusBar: '#f2f2f2',
    icon: '#111',
    attention: '#d00',
    card: '#fff',
  },
  fonts,
};

const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    background: '#111',
    text: '#f2f2f2',
    statusBar: '#111',
    attention: '#d00',
    card: '#222',
  },
  fonts,
};

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const scheme = useColorScheme();

  const [userPreferences, setUserPreferences] = useMMKVObject<{
    darkMode: boolean;
  }>('userPreferences', storage);

  const [darkMode, setDarkMode] = useState<boolean>(
    userPreferences?.darkMode ?? scheme === 'dark'
  );
  const [palette, setPalette] = useState(darkMode ? DarkTheme : LightTheme);

  const handleThemeToggle = useCallback(() => {
    setDarkMode(currentDarkMode => {
      setUserPreferences({ darkMode: !currentDarkMode });
      setPalette(!currentDarkMode ? DarkTheme : LightTheme);
      return !currentDarkMode;
    });
  }, [darkMode]);

  const valueMemo = useMemo(
    () => ({
      darkMode,
      handleThemeToggle,
      palette,
    }),
    [darkMode, handleThemeToggle, palette]
  );

  return (
    <ThemeContext.Provider value={valueMemo}>{children}</ThemeContext.Provider>
  );
};

interface ThemeContextProps {
  darkMode: boolean;
  handleThemeToggle(): void;
  palette: typeof LightTheme | typeof DarkTheme;
}

export const useCustomTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  return context as ThemeContextProps;
};

export default ThemeProvider;
