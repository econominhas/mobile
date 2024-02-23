import React, { useCallback } from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { Text, View } from 'react-native';

import { useAuth } from '~/contexts/auth';

export function Auth() {
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
    <View className="flex-1 items-center justify-center gap-4 bg-zinc-900">
      <Text className="text-[32px] font-bold text-white">Econominhas</Text>
      <Text className="text-white">Faça login com um clique!</Text>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        onPress={signIn}
        disabled={false}
      />
    </View>
  );
}
