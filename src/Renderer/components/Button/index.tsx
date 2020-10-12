import React from 'react';

import { ButtonTypes, Props } from './types';
import * as styled from './styled';

const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  type,
  onClick,
}) => {
  return (
    <styled.Container className={`${type} ${className}`} disabled={disabled} onClick={onClick} >
      {children}
    </styled.Container>
  );
};

Button.defaultProps = {
  type: ButtonTypes.default,
  className: '',
};

export default Button;
