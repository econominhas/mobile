import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ImageLogo = styled.Image`
  width: 150px;
  height: 150px;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.title}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family.extraBold};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.tiny}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.family.light};
  text-align: center;
  margin-bottom: 24px;
`;
