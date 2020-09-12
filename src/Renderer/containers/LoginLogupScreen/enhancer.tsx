import React from 'react';
import { compose } from 'recompose';

import styles from './styles';
import { Props } from './types';

const enhancer = (Component: React.ComponentType<Props>): React.FC => () => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return <Component submitForm={submitForm} />;
};

export default compose<Props, {}>(enhancer, styles);
