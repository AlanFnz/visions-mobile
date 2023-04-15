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

const Signup = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const onError = (errors: any) => console.log(errors);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
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
        <Text style={styles.label}>Confirm password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              secureTextEntry={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="confirmPassword"
          rules={{ required: true }}
        />
      </View>
      <View style={styles.button}>
        <Button title="Create account" onPress={handleSubmit(onSubmit)} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'white', top: 15 }}>Already have an account</Text>
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
