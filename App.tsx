import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { App } from './src';

GoogleSignin.configure({
  webClientId:
    '489785083174-0rqt9bc7l9t09luor3fc16h21kdf57q7.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  offlineAccess: true,
});

function Main() {
  return <App />;
}

export default Main;
