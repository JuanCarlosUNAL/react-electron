import React from 'react';
import { useHistory } from 'react-router-dom';
import { compose } from 'recompose';
import { auth } from 'firebase';

import { onLoginType, onLogupType, Props } from './types';
import styles from './styles';

const enhancer = (Component: React.ComponentType<Props>): React.FC => () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const vanishError = () => setErrorMessage('');

  const onLogup: onLogupType = async (email: string, pass: string, confirmPass: string,) => {
    if (pass !== confirmPass) {
      setErrorMessage('The password does not match.');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, pass);
      history.push('/users');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const onLogin: onLoginType = async (email: string, pass: string) => {
    if (!email || !pass) {
      setErrorMessage('Password and email must be filled.');
      return;
    }
    if (!/.+@\w+(\.\w+)+/.test(email)) {
      setErrorMessage('Email does not match the pattern');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, pass);
      history.push('/users');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      await auth().signOut();
    }
  };

  return <Component
    onLogup={onLogup}
    onLogin={onLogin}
    errorMessage={errorMessage}
    vanishError={vanishError}
  />;
};

export default compose<Props, {}>(enhancer, styles);
