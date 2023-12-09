import Icon from '@expo/vector-icons/FontAwesome5';
import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const Content = styled.ScrollView``;

Content.defaultProps = {
  contentContainerStyle: {
    flex: 1,
  },
};

export const ConfigItemWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 12px;
`;

export const ConfigItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ConfigText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;

export const ConfigInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ConfigIcon = styled(Icon)`
  margin-right: 8px;
`;

ConfigIcon.defaultProps = {
  size: 14,
};

export const ConfigSwitch = styled.Switch``;

export const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 12px;
  border-radius: 4px;
`;

export const LogoutText = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  margin-left: 16px;
`;

export const LogoutIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.attention};
`;

LogoutIcon.defaultProps = {
  size: 14,
  name: 'sign-out-alt',
};

export const ProfileWrapper = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 24px;
`;

export const ProfileName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
`;

export const ProfileEmail = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;
