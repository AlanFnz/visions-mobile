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
import reactotron from 'reactotron-react-native';

const Login = ({ navigation }) => {
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

  const onSubmit = (data: any) => reactotron.log(data);

  /**
   * TODO:
   * 1. refactor input components
   * 2. styles to styled components
   * 3. validations
   * 4. implement basic login with firebase
   */
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        {errors.email && <Text style={{ color: 'red' }}>Email error</Text>}

        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{ required: true }}
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
    </View>
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
