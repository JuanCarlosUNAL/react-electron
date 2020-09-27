import React from 'react';

import { Props } from './types';
import * as styled from './styled';

const Button: React.FC<Props> = ({disabled, className, children}) => (
  <styled.Container className={className} disabled={disabled}>
    {children}
  </styled.Container>
);

export default Button;
