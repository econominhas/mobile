import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthProvider } from './contexts/auth';
import { MainNavigator } from './navigation';

export function App() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <StatusBar style="light" translucent />
      <NavigationContainer>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
