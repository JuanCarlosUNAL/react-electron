import styled from 'styled-components';
import MaterialIcon from '@mdi/react';

import {default as OButton} from '../../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0.5rem;
  padding: 1rem;
  backdrop-filter: invert(20%);
`;

export const Time = styled.h1`
`;

export const Description = styled.p`
  margin: 1rem 0rem;
`;

export const JustifyRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Icon = styled(MaterialIcon)`
  height: 1rem;
  width: 1rem;
`;

export const Button = styled(OButton)`
  padding-left: 1rem;
  padding-right: 1rem;
  & span {
    width: 0rem;
    transform: scaleX(0);
    opacity: 0;
    transition: 0.5s;
  }
  &:hover span {
    width: 3rem;
    transform: scaleX(1);
    opacity: 1;
  }
`;
