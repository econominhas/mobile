import React from 'react';

import {
  render,
  fireEvent,
  waitFor,
  renderHook,
} from '@testing-library/react-native';
import { TouchableOpacity } from 'react-native';

import { ThemeProvider, ThemeContext, useCustomTheme } from '../customTheme';

describe('ThemeProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should toggle dark/light mode when handleThemeToggle is called', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ darkMode, handleThemeToggle }) => (
            <TouchableOpacity
              testID="toggle-button"
              onPress={handleThemeToggle}
            >
              {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
            </TouchableOpacity>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    const toggleButton = getByTestId('toggle-button');

    fireEvent.press(toggleButton);

    await waitFor(() => {
      expect(toggleButton.children).toContain('Toggle Light Mode');
    });

    fireEvent.press(toggleButton);

    await waitFor(() => {
      expect(toggleButton.children).toContain('Toggle Dark Mode');
    });
  });

  it('useCustomTheme should return the correct values', () => {
    const { result } = renderHook(() => useCustomTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current).toBeDefined();
  });
});
