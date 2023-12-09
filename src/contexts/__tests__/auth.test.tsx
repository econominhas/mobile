import React from 'react';

import { User } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import {
  render,
  fireEvent,
  waitFor,
  renderHook,
} from '@testing-library/react-native';
import { TouchableOpacity, Text } from 'react-native';

import { AuthContext, AuthProvider, useAuth } from '../auth';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
  },
}));

describe('AuthProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render children', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AuthProvider>
          <Text>Test Children</Text>
        </AuthProvider>
      </NavigationContainer>
    );

    expect(getByText('Test Children')).toBeDefined();
  });

  it('should update state and navigate to Home on login finished', () => {
    const mockUserInfo = { name: 'John Doe' } as unknown as User;

    const { getByTestId } = render(
      <NavigationContainer>
        <AuthProvider>
          <AuthContext.Consumer>
            {({ handleOnLoginFinished }) => (
              <TouchableOpacity
                testID="login-test"
                onPress={() => handleOnLoginFinished(mockUserInfo)}
              >
                Login
              </TouchableOpacity>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('login-test'));

    expect(mockNavigate).toHaveBeenCalledWith('Home');
  });

  it('should sign out and navigate to Auth on sign out', async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <AuthProvider>
          <AuthContext.Consumer>
            {({ handleSignOut }) => (
              <TouchableOpacity testID="signout-test" onPress={handleSignOut}>
                Sign Out
              </TouchableOpacity>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('signout-test'));

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('Auth'));
  });

  it('useAuth should return auth context', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current).toBeDefined();
  });
});
