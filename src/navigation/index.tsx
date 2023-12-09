import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../contexts/auth';
import Auth from '../screens/Auth';
import Home from '../screens/Home';

export type MainStackParamList = {
  Home: undefined;
  Auth: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  const { isSigned } = useAuth();

  return (
    <MainStack.Navigator initialRouteName="Auth">
      {!isSigned ? (
        <MainStack.Group screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Auth" component={Auth} />
        </MainStack.Group>
      ) : (
        <MainStack.Group screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Group>
      )}
    </MainStack.Navigator>
  );
};
