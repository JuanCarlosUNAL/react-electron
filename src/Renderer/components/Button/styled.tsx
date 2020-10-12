import styled from 'styled-components';
import { ButtonTypes } from './types';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem 3rem;
  margin: 0.5rem;
  border-radius: 1rem;
  border: solid 1px;
  font-weight: bold;
  background-color: white;
  cursor: pointer;

  &.${ButtonTypes.default} {
    color: ${({theme}) => theme.colors.primary};
    border-color: ${({theme}) => theme.colors.primary};
  }
  &.${ButtonTypes.error} {
    color: ${({theme}) => theme.colors.danger};
    border-color: ${({theme}) => theme.colors.danger};
  }
  &.${ButtonTypes.info} {
    color: ${({theme}) => theme.colors.info};
    border-color: ${({theme}) => theme.colors.info};
  }
  &.${ButtonTypes.warning} {
    color: ${({theme}) => theme.colors.warning};
    border-color: ${({theme}) => theme.colors.warning};
  }
  &.${ButtonTypes.success} {
    color: ${({theme}) => theme.colors.success};
    border-color: ${({theme}) => theme.colors.success};
  }
  &:disabled {
    color: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 70%;
  }
  &:active {
    opacity: 100%;
  }
`;
