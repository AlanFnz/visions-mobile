export type User = {
  uid?: string | null;
  email?: string | null;
};

export type UserData = User & {
  firstName?: string;
  lastName?: string;
  firstLast?: string;
  profilePicture?: string;
  userId?: string;
  signUpDate?: string;
};

export type AuthState = {
  token: string | null;
  userData: UserData | null;
  didTryAutoLogin: boolean;
  isLoggedIn: boolean;
};
