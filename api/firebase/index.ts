import auth from '@react-native-firebase/auth';

const firebaseAuth = (email: string, password: string) =>
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

export { firebaseAuth };
