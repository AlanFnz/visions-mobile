import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';

export type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

export interface SignupProps {
  navigation: SignupScreenNavigationProp;
}

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
