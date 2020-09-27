import styled from 'styled-components';

export const Container = styled.button`
  padding: .5rem 3rem;
  border: none;
  background-color: white;
  border-radius: 1rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.greenDark};
  border: solid 1px ${({theme}) => theme.colors.greenDark};
  margin-top: auto;
  cursor: pointer;
  
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
