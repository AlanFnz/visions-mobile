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
   * 3. validations
   */
  return (
    <Container>
      <FormContainer>
        <Label>Email</Label>
        <InputField
          control={control}
          name="email"
          autoCapitalize="none"
          rules={{ required: true }}
        />
        <Label>Password</Label>
        <InputField
          control={control}
          name="password"
          autoCapitalize="none"
          secureTextEntry
          rules={{ required: true }}
        />
        <Label>Confirm password</Label>
        <InputField
          control={control}
          name="confirmPassword"
          autoCapitalize="none"
          secureTextEntry
          rules={{ required: true }}
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
