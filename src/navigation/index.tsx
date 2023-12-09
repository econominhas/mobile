import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../contexts/auth';
import { useCustomTheme } from '../contexts/customTheme';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

export type MainStackParamList = {
  Home: undefined;
  Auth: undefined;
  Settings: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = React.memo(() => {
  const { palette } = useCustomTheme();
  const { isSigned } = useAuth();

  return (
    <MainStack.Navigator initialRouteName="Auth">
      {!isSigned ? (
        <MainStack.Group screenOptions={{ headerShown: false }}>
          <MainStack.Screen name="Auth" component={Auth} />
        </MainStack.Group>
      ) : (
        <MainStack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: true,
              headerTitle: '',
              headerTintColor: palette.colors.text,
              headerStyle: {
                backgroundColor: palette.colors.background,
              },
              headerShadowVisible: false,
            }}
          />
        </MainStack.Group>
      )}
    </MainStack.Navigator>
  );
});
