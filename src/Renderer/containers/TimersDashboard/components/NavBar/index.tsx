import React from 'react';
import { mdiLogout } from '@mdi/js';

import Button from '../../../../components/Button';
import { ButtonTypes } from '../../../../components/Button/types';

import * as styled from './styled';
import { Props } from './types';

const NavBar: React.FC<Props> = ({onNewCard, logout}) => (
  <styled.Container>
    <Button onClick={logout} type={ButtonTypes.error}>
      <styled.Icon path={mdiLogout}/>
      Logout
    </Button>
    <Button onClick={onNewCard}>
      New Card
    </Button>
  </styled.Container>
);

export default NavBar;
