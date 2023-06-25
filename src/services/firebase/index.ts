import auth from '@react-native-firebase/auth';
import database, {
  FirebaseDatabaseTypes
} from '@react-native-firebase/database';
import { UserData } from '../../types/user.types';

/**
 * @param email
 * @param password
 * @description handles user firebase user creation w/ email and password
 * //TODO: error handling
 *         remove console logs
 */
const firebaseCreateWithEmailAndPassword = (email: string, password: string) =>
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('User account created & signed in!', data);
    })
    .catch((error: { code: string }) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

const firebaseSignInWithEmailAndPassword = (email: string, password: string) =>
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      console.log('User signed in!', data);
    })
    .catch((error: { code: string }) => {
      console.error(error);
    });

const firebaseSignOut = () =>
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));

export {
  firebaseCreateWithEmailAndPassword,
  firebaseSignInWithEmailAndPassword,
  firebaseSignOut
};

export const firebaseUpdateSignedInUserData = async (
  userId: string,
  newData: UserData
): Promise<void> => {
  if (newData.firstName && newData.lastName) {
    const firstLast = `${newData.firstName} ${newData.lastName}`.toLowerCase();
    newData.firstLast = firstLast;
  }

  const userRef: FirebaseDatabaseTypes.Reference = database().ref(
    `users/${userId}`
  );

  await userRef.update(newData);
};

export const firebaseCreateUser = async (
  firstName: string,
  lastName: string,
  email: string,
  userId: string
): Promise<UserData> => {
  const firstLast = `${firstName} ${lastName}`.toLowerCase();
  const userData: UserData = {
    firstName,
    lastName,
    firstLast,
    email,
    userId,
    signUpDate: new Date().toISOString()
  };

  const userRef = database().ref(`users/${userId}`);

  await userRef.set(userData);

  return userData;
};
