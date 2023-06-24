import { Image } from 'react-native';
import { styled } from 'styled-components/native';
import { StyledProps } from './ProfileImage.types';
import colors from '../../constants/colors';

export const ImageContainer = styled.TouchableOpacity`
  position: relative;
`;

export const ImageEditIconContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${colors.lightGrey};
  border-radius: 20px;
  padding: 8px;
`;

export const LoadingContainer = styled.View<StyledProps>`
  justify-content: center;
  align-items: center;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`;

export const StyledImage = styled(Image)<StyledProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50px;
  border-color: ${colors.grey};
  border-width: 1px;
`;
