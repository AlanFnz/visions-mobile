import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { firebaseSignInWithEmailAndPassword } from '../../services/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import InputField from '../../components/InputField';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: FormData) =>
    firebaseSignInWithEmailAndPassword(data.email, data.password);

  /**
   * TODO:
   * 1. refactor input components
   * 2. styles to styled components
   * 3. validations
   */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <InputField
          control={control}
          name="email"
          rules={{ required: true }}
          autoCapitalize="none"
        />
        {errors.email && <Text style={{ color: 'red' }}>Email error</Text>}

        <Text style={styles.label}>Password</Text>
        <InputField
          control={control}
          name="password"
          rules={{ required: true }}
          secureTextEntry
        />
        {errors.password && (
          <Text style={{ color: 'red' }}>Password error</Text>
        )}
      </View>
      <View style={styles.button}>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: 'white', top: 15 }}>Create account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0
  },
  button: {
    marginTop: 40,
    color: 'black',
    height: 40,
    backgroundColor: '#fffffe',
    borderRadius: 4
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#111111'
  },
  formContainer: {
    flex: 0,
    alignItems: 'flex-start',
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius: 4
  }
});

export default Login;
