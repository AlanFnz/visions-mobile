import { styled } from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex-direction: row;
  padding-vertical: 7;
  border-bottom-color: ${colors.extraLightGrey};
  border-bottom-width: 1;
  align-items: center;
  min-height: 50;
`;

export const TextContainer = styled.View`
  margin-left: 14;
`;

export const Title = styled.Text`
  font-family: 'medium';
  font-size: 16;
  letter-spacing: 0.3;
`;

export const SubTitle = styled.Text`
  font-family: 'regular';
  color: ${colors.grey};
  letter-spacing: 0.3;
`;
