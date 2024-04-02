import React from 'react';

import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import AuthProvider from './contexts/auth';
import { useCustomTheme } from './contexts/customTheme';
import { MainNavigator } from './navigation';

function App() {
  const { palette, darkMode } = useCustomTheme();
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: palette.colors.background }}
    >
      <StatusBar
        style={darkMode ? 'light' : 'dark'}
        backgroundColor={palette.colors.statusBar}
      />
      <ThemeProvider theme={palette}>
        <NavigationContainer theme={palette}>
          <AuthProvider>
            <MainNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default React.memo(App);
