import { useCallback } from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { StyleSheet, Text, View } from 'react-native';

import { useAuth } from '../../contexts/auth';

export default function Auth() {
  const { handleOnLoginFinished } = useAuth();

  const signIn = useCallback(async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      return handleOnLoginFinished(userInfo);
    } catch (error) {
      console.log('Message', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 24,
        }}
      >
        <Text style={{ fontFamily: 'NunitoSansExtraBold', fontSize: 32 }}>
          Econominhas
        </Text>
        <Text style={{ fontFamily: 'NunitoSansRegular', fontSize: 12 }}>
          Acesse sua conta com um clique!
        </Text>
      </View>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
        disabled={false}
      />
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
