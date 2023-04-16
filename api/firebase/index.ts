import auth from '@react-native-firebase/auth';

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
