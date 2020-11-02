import React from 'react';
import { useHistory } from 'react-router-dom';

import LoginLogupScreen from '../../containers/LoginLogupScreen';
import { useFirebase } from '../../Providers/FirebaseProvider';

const LoginLogupEnhancer: React.FC = () => {
  const { auth } = useFirebase();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const onLogup = async (email: string, pass: string, confirmPass: string,) => {
    if (pass !== confirmPass) {
      setErrorMessage('The password does not match.');
      return;
    }

    try {
      await auth?.createUserWithEmailAndPassword(email, pass);
      history.push('/users');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const onLogin = async (email: string, pass: string) => {
    if (!email || !pass) {
      setErrorMessage('Password and email must be filled.');
      return;
    }
    if (!/.+@\w+(\.\w+)+/.test(email)) {
      setErrorMessage('Email does not match the pattern');
      return;
    }

    try {
      await auth?.signInWithEmailAndPassword(email, pass);
      history.push('/users');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      await auth?.signOut();
    }
  };

  return <LoginLogupScreen
    onLogup={onLogup}
    onLogin={onLogin}
    errorMessage={errorMessage}
  />;
};

export default LoginLogupEnhancer;
