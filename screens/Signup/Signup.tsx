import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const Signup = () => {
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
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={() => {
            reset({
              email: 'alan@m1ndless.com',
              password: '****'
            });
          }}
        />
      </View>

      <View style={styles.button}>
        <Button title="Button" onPress={handleSubmit(onSubmit)} />
      </View>
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
    backgroundColor: '#ec5990',
    borderRadius: 4
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#0e101c'
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4
  }
});

export default Signup;
