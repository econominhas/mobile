import React, { useCallback } from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import * as S from './styles';
import logoImg from '../../../assets/logo.png';
import { useAuth } from '../../contexts/auth';
import { useCustomTheme } from '../../contexts/customTheme';

function Auth() {
  const { handleOnLoginFinished } = useAuth();

  const { darkMode } = useCustomTheme();

  const signIn = useCallback(async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      return handleOnLoginFinished(userInfo);
    } catch (error) {
      console.log('Message', error);
    }
  }, []);

  return (
    <S.Container>
      <S.ImageLogo resizeMode="contain" source={logoImg} />
      <S.Title>Econominhas</S.Title>
      <S.Subtitle>Faça login com um clique!</S.Subtitle>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={
          darkMode
            ? GoogleSigninButton.Color.Light
            : GoogleSigninButton.Color.Dark
        }
        onPress={signIn}
        disabled={false}
      />
    </S.Container>
  );
}

export default React.memo(Auth);
