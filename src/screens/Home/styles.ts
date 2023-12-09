import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  margin-left: 18px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
`;
