import React from 'react';

import * as styled from './styled';
import { Props } from './types';

const ButtonGroup: React.FC<Props> = ({children}) => {
  return (
    <styled.Wrapper>
      {children}
    </styled.Wrapper>
  );
};

export default ButtonGroup;
