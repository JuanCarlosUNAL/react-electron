import styled from 'styled-components';
import MaterialIcon from '@mdi/react';

export const ModalContainer = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #808080C0;
  backdrop-filter: blur(10);
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: 
    '.m.';
`;

export const Modal = styled.div`
  grid-area: m;
  justify-self: center;
  align-self: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;
  margin: 1rem;
  grid-column-start: 3;
  justify-self: right;
  display: flex;
  outline: none;
`;

export const Icon = styled(MaterialIcon)`
  color: black;
  width: 30px;
  height: 30px;
`;
