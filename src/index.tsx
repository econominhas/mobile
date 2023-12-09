import React from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthProvider from './contexts/auth';
import ThemeProvider, { useCustomTheme } from './contexts/customTheme';
import { MainNavigator } from './navigation';

GoogleSignin.configure({
  webClientId:
    '489785083174-0rqt9bc7l9t09luor3fc16h21kdf57q7.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

export default function App() {
  const { palette } = useCustomTheme();
  const [fontsLoaded] = useFonts({
    NunitoSansBold: require('../assets/fonts/NunitoSansBold.ttf'),
    NunitoSansExtraBold: require('../assets/fonts/NunitoSansExtraBold.ttf'),
    NunitoSansMedium: require('../assets/fonts/NunitoSansMedium.ttf'),
    NunitoSansRegular: require('../assets/fonts/NunitoSansRegular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ThemeProvider>
        <NavigationContainer theme={palette}>
          <AuthProvider>
            <MainNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
