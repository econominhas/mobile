import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

import { useTypedNavigation } from '~/hooks';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactElement }) {
  const [isSigned, setIsSigned] = useState(false);
  const [userInfo, setUserInfo] = useState<User>();
  const navigation = useTypedNavigation();

  const handleOnLoginFinished = useCallback((userInfo: User) => {
    setIsSigned(true);
    setUserInfo(userInfo);
    navigation.navigate('Home');
  }, []);

  const handleSignOut = useCallback(async () => {
    await GoogleSignin.signOut();
    setIsSigned(false);
    setUserInfo(undefined);
    navigation.navigate('Auth');
  }, []);

  const valueMemo = useMemo(
    () => ({
      isSigned,
      userInfo,
      setUserInfo,
      handleOnLoginFinished,
      handleSignOut,
    }),
    [isSigned, userInfo, setUserInfo, handleOnLoginFinished, handleSignOut]
  );
  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

export interface AuthContextProps {
  isSigned: boolean;
  userInfo: User | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
  handleOnLoginFinished(userInfo: User): void;
  handleSignOut(): void;
}

export function useAuth() {
  const context = useContext<AuthContextProps>(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
