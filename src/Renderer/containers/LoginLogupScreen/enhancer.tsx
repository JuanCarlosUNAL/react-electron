import * as React from 'react';
import { Props } from '.';

export default (Component: React.ComponentType<Props>) => (): JSX.Element => {
  return <Component />;
};