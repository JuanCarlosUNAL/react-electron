import React from 'react';
import { compose } from 'recompose';
import { Props } from './types';
import styles from './styles';

const enhancer = (Comp: React.ComponentType<Props>): React.FC => () => {
  return <Comp />;
};

export default compose<Props, {}>(enhancer, styles);
