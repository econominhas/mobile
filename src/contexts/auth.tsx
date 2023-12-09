import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useMemo,
} from 'react';

import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

import useTypedNavigation from '../hooks/useTypedNavigation';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isSigned, setIsSigned] = useState<boolean>(false);
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
};

interface AuthContextProps {
  isSigned: boolean;
  userInfo: User | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>;
  handleOnLoginFinished(userInfo: User): void;
  handleSignOut(): void;
}

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  return context as AuthContextProps;
};

export default AuthProvider;
