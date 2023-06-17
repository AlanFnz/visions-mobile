import { RegisterOptions } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

type GetValuesFunction = () => FormData;

export const emailValidation: RegisterOptions = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address'
  }
};

export const passwordValidation: RegisterOptions = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters'
  }
};

export const confirmPasswordValidation = (
  getValues: GetValuesFunction
): RegisterOptions => ({
  required: 'Please confirm your password',
  validate: (value) =>
    value === getValues().password || 'Passwords do not match'
});
