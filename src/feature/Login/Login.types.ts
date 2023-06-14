import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

export interface FormData {
  email: string;
  password: string;
}
