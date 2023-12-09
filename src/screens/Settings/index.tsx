import React from 'react';

import * as S from './styles';
import { useAuth } from '../../contexts/auth';
import { useCustomTheme } from '../../contexts/customTheme';

function Settings() {
  const { darkMode, handleThemeToggle, palette } = useCustomTheme();
  const { userInfo, handleSignOut } = useAuth();
  return (
    <S.Container>
      <S.ProfileWrapper>
        {userInfo?.user?.photo && (
          <S.ProfileImage source={{ uri: userInfo?.user?.photo }} />
        )}
        <S.ProfileName>{userInfo?.user?.givenName}</S.ProfileName>
        <S.ProfileEmail>{userInfo?.user?.email}</S.ProfileEmail>
      </S.ProfileWrapper>
      <S.Content>
        <S.ConfigItemWrapper>
          <S.ConfigItem>
            <S.ConfigInfoWrapper>
              <S.ConfigIcon
                name={darkMode ? 'moon' : 'sun'}
                color={palette.colors.text}
              />
              <S.ConfigText>
                {darkMode ? 'Modo escuro' : 'Modo claro'}
              </S.ConfigText>
            </S.ConfigInfoWrapper>
            <S.ConfigInfoWrapper>
              <S.ConfigSwitch
                value={darkMode}
                onValueChange={handleThemeToggle}
                thumbColor={palette.colors.text}
                trackColor={{
                  false: palette.colors.text,
                  true: palette.colors.text,
                }}
              />
            </S.ConfigInfoWrapper>
          </S.ConfigItem>
        </S.ConfigItemWrapper>
        <S.ConfigItemWrapper>
          <S.ConfigItem>
            <S.ConfigInfoWrapper>
              <S.ConfigIcon name="star" color={palette.colors.text} />
              <S.ConfigText>Plano atual</S.ConfigText>
            </S.ConfigInfoWrapper>
            <S.ConfigInfoWrapper>
              <S.ConfigText>Premium</S.ConfigText>
            </S.ConfigInfoWrapper>
          </S.ConfigItem>
        </S.ConfigItemWrapper>
        <S.ConfigItemWrapper>
          <S.ConfigItem>
            <S.ConfigInfoWrapper>
              <S.ConfigIcon name="lightbulb" color={palette.colors.text} />
              <S.ConfigText>Dia de lembretes</S.ConfigText>
            </S.ConfigInfoWrapper>
            <S.ConfigInfoWrapper>
              <S.ConfigText>Segunda-feira</S.ConfigText>
            </S.ConfigInfoWrapper>
          </S.ConfigItem>
        </S.ConfigItemWrapper>
        <S.ConfigItemWrapper>
          <S.ConfigItem>
            <S.ConfigInfoWrapper>
              <S.ConfigIcon name="cog" color={palette.colors.text} />
              <S.ConfigText>Versão do aplicativo</S.ConfigText>
            </S.ConfigInfoWrapper>
            <S.ConfigInfoWrapper>
              <S.ConfigText>1.0.0</S.ConfigText>
            </S.ConfigInfoWrapper>
          </S.ConfigItem>
        </S.ConfigItemWrapper>
      </S.Content>
      <S.LogoutButton onPress={handleSignOut}>
        <S.LogoutIcon color={palette.colors.text} />
        <S.LogoutText>Sair</S.LogoutText>
      </S.LogoutButton>
    </S.Container>
  );
}

export default React.memo(Settings);
