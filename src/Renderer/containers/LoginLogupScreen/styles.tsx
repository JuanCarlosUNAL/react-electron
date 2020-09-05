import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const styles = (Component: React.ComponentType<Props>) => styled(Component)`
  background-color: lavender;
  .label {
    color: red;
  }
`;

export default styles;
