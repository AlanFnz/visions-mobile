import { RegisterOptions } from 'react-hook-form';

export const emailValidation: RegisterOptions = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Invalid email address'
  }
};

export const passwordValidation: RegisterOptions = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters long'
  }
};
