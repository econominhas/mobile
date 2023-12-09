import React from 'react';

import Icon from '@expo/vector-icons/FontAwesome5';
import { Pressable } from 'react-native';

import * as S from './styles';
import { useAuth } from '../../contexts/auth';
import { useCustomTheme } from '../../contexts/customTheme';
import useTypedNavigation from '../../hooks/useTypedNavigation';

function Home() {
  const { userInfo } = useAuth();
  const { palette } = useCustomTheme();
  const navigation = useTypedNavigation();

  return (
    <S.Container>
      <S.Header>
        <S.UserInfo>
          {userInfo?.user?.photo && (
            <S.Photo
              source={{
                uri: userInfo?.user?.photo,
              }}
            />
          )}

          <S.UserGreeting>Olá, {userInfo?.user.givenName}</S.UserGreeting>
        </S.UserInfo>
        <Pressable onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={24} color={palette.colors.text} />
        </Pressable>
      </S.Header>
    </S.Container>
  );
}

export default React.memo(Home);
