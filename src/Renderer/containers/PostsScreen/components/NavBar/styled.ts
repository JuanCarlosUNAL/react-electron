import styled from 'styled-components';
import MaterialIcon from '@mdi/react';

export const Container = styled.header`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const Icon = styled(MaterialIcon)`
  color: ${({theme}) => theme.colors.danger};
  width: 15px;
  height: 15px,
`;
