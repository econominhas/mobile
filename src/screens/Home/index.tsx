import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '../../contexts/auth';
import { useCustomTheme } from '../../contexts/customTheme';

export default function Home() {
  const { userInfo, handleSignOut } = useAuth();
  const { handleThemeToggle } = useCustomTheme();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{userInfo?.user?.name}</Text>
      <Pressable onPress={handleSignOut}>
        <Text>Deslogar</Text>
      </Pressable>

      <Pressable onPress={handleThemeToggle}>
        <Text>Toggle theme</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
