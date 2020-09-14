import React from 'react';
import { useHistory } from 'react-router-dom';
import { compose } from 'recompose';

import styles from './styles';
import { Props } from './types';

const enhancer = (Component: React.ComponentType<Props>): React.FC => () => {
  const history = useHistory();
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/users');
  };
  return <Component submitForm={submitForm} />;
};

export default compose<Props, {}>(enhancer, styles);
