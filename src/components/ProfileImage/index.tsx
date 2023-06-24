import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import userImage from '../../assets/images/userImage.jpeg';
import colors from '../../constants/colors';
import {
  launchImagePicker,
  uploadImageAsync
} from '../../utils/imagePickerHelper';
import { firebaseUpdateSignedInUserData } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { updateLoggedInUserData } from '../../state/slices/authSlice';
import { ProfileImageProps } from './ProfileImage.types';
import {
  ImageContainer,
  ImageEditIconContainer,
  LoadingContainer,
  StyledImage
} from './ProfileImage.styles';

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  const dispatch = useDispatch();

  const source = props.uri ? { uri: props.uri } : userImage;

  const [image, setImage] = useState<typeof source>(source);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showEditButton = props.showEditButton === true;
  const userId = props.userId;

  const pickImage = async () => {
    try {
      const tempUri = await launchImagePicker();

      if (!tempUri) return;

      setIsLoading(true);
      const uploadUrl = await uploadImageAsync(tempUri);
      setIsLoading(false);

      if (!uploadUrl) {
        throw new Error('Could not upload image');
      }

      const newData = { profilePicture: uploadUrl };

      await firebaseUpdateSignedInUserData(userId, newData);
      dispatch(updateLoggedInUserData({ newData }));

      setImage({ uri: uploadUrl });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <ImageContainer onPress={showEditButton ? pickImage : undefined}>
      {isLoading ? (
        <LoadingContainer size={props.size}>
          <ActivityIndicator size={'small'} color={colors.primary} />
        </LoadingContainer>
      ) : (
        <StyledImage size={props.size} source={image} />
      )}
      {!isLoading && (
        <ImageEditIconContainer>
          <FontAwesome name="pencil" size={15} color="black" />
        </ImageEditIconContainer>
      )}
    </ImageContainer>
  );
};

export default ProfileImage;
