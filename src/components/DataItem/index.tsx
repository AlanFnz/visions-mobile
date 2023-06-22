import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import ProfileImage from '../ProfileImage';
import { Container, SubTitle, TextContainer, Title } from './DataItem.styles';

type DataItemProps = {
  title: string;
  subTitle?: string;
  image?: string;
  onPress: () => void;
};

const DataItem: React.FC<DataItemProps> = (props) => {
  const { title, subTitle, image } = props;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Container>
        <ProfileImage uri={image} size={40} userId={'dummy_id'} />

        <TextContainer>
          <Title numberOfLines={1}>{title}</Title>

          <SubTitle numberOfLines={1}>{subTitle}</SubTitle>
        </TextContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default DataItem;
