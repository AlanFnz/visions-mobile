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
import { firebaseCreateWithEmailAndPassword } from '../../services/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import InputField from '../../components/InputField';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

interface SignupProps {
  navigation: LoginScreenNavigationProp;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data: FormData) =>
    firebaseCreateWithEmailAndPassword(data.email, data.password);

  /**
   * TODO:
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
          autoCapitalize="none"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Password</Text>
        <InputField
          control={control}
          name="password"
          autoCapitalize="none"
          secureTextEntry
          rules={{ required: true }}
        />
        <Text style={styles.label}>Confirm password</Text>
        <InputField
          control={control}
          name="confirmPassword"
          autoCapitalize="none"
          secureTextEntry
          rules={{ required: true }}
        />
      </View>
      <View style={styles.button}>
        <Button title="Create account" onPress={handleSubmit(onSubmit)} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'white', top: 15 }}>Already have an account</Text>
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
    color: 'white',
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

export default Signup;
