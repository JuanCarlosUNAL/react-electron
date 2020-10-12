import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  &>button {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
  &>button:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  &>button:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
