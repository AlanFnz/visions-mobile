import {
  HeaderButton,
  HeaderButtonProps
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import colors from '../../constants/colors';

const CustomHeaderButton: React.FC<HeaderButtonProps> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons as any} // TODO: color on Ionicons also accepts a number type
      iconSize={23}
      color={props.color ?? colors.blue}
    />
  );
};

export default CustomHeaderButton;
