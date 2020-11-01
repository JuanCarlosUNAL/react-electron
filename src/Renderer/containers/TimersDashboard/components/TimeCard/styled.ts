import styled from 'styled-components';
import MaterialIcon from '@mdi/react';

import {default as OButton} from '../../../../components/Button';

export const Container = styled.div`
  position: relative;
  padding-top: 1rem;
`;

export const DragOverContainer = styled.div`
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  &.show {
    opacity: 1;
    z-index: 10;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  backdrop-filter: invert(20%);
  transition: 0.25s;

  &.picked {
    transform: rotate(-5deg);
  }
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
    transition: 0.3s;
  }
  &:hover span {
    width: 3rem;
    transform: scaleX(1);
    opacity: 1;
  }
`;
