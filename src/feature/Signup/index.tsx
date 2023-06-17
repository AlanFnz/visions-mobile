import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { firebaseCreateWithEmailAndPassword } from '../../services/firebase';
import InputField from '../../components/InputField';
import {
  Container,
  FormContainer,
  Label,
  StyledButton,
  BottomText
} from './Signup.styles';
import { SignupProps, FormData } from './Signup.types';
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation
} from './Signup.validations';

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data: FormData) =>
    firebaseCreateWithEmailAndPassword(data.email, data.password);

  return (
    <Container>
      <FormContainer>
        <Label>Email</Label>
        <InputField
          control={control}
          name="email"
          autoCapitalize="none"
          rules={emailValidation}
        />
        <Label>Password</Label>
        <InputField
          control={control}
          name="password"
          autoCapitalize="none"
          secureTextEntry
          rules={passwordValidation}
        />
        <Label>Confirm password</Label>
        <InputField
          control={control}
          name="confirmPassword"
          autoCapitalize="none"
          secureTextEntry
          rules={confirmPasswordValidation(getValues)}
        />
      </FormContainer>
      <StyledButton>
        <Button title="Create account" onPress={handleSubmit(onSubmit)} />
      </StyledButton>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <BottomText>Already have an account</BottomText>
      </TouchableOpacity>
    </Container>
  );
};

export default Signup;
