import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import AuthProvider from './contexts/auth';
import { useCustomTheme } from './contexts/customTheme';
import { MainNavigator } from './navigation';

function App() {
  const { palette, darkMode } = useCustomTheme();
  const [fontsLoaded] = useFonts({
    NunitoSansLight: require('../assets/fonts/NunitoSansLight.ttf'),
    NunitoSansBold: require('../assets/fonts/NunitoSansBold.ttf'),
    NunitoSansExtraBold: require('../assets/fonts/NunitoSansExtraBold.ttf'),
    NunitoSansMedium: require('../assets/fonts/NunitoSansMedium.ttf'),
    NunitoSansRegular: require('../assets/fonts/NunitoSansRegular.ttf'),
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
