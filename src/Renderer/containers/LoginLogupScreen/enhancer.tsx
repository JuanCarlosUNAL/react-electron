import React from 'react';
import { Props } from '.';

const enhancer = (Component: React.ComponentType<Props>) => (): JSX.Element => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return <Component submitForm={submitForm}/>;
};

export default enhancer;
