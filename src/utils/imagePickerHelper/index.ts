import storage from '@react-native-firebase/storage';
import {
  launchImageLibrary,
  ImagePickerResponse,
  ImageLibraryOptions
} from 'react-native-image-picker';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';

export const launchImagePicker = async (): Promise<string> => {
  await checkMediaPermissions();

  return new Promise((resolve, reject) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        reject('User cancelled image picker');
      } else if (response.errorMessage) {
        reject(`ImagePicker Error: ${response.errorMessage}`);
      } else if (response.assets && response.assets[0].uri) {
        resolve(response.assets[0].uri);
      } else {
        reject('Unknown error');
      }
    });
  });
};

export const uploadImageAsync = async (uri: string): Promise<string> => {
  const pathFolder = 'profilePics';
  const reference = storage().ref(`${pathFolder}/${uuidv4()}`);

  await reference.putFile(uri);

  return reference.getDownloadURL();
};

const checkMediaPermissions = async (): Promise<void> => {
  if (Platform.OS !== 'ios') {
    return;
  }

  const permissionResult = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);

  if (permissionResult === RESULTS.DENIED) {
    const requestResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

    if (requestResult !== RESULTS.GRANTED) {
      return Promise.reject('We need permission to access your photos');
    }
  }

  return Promise.resolve();
};
