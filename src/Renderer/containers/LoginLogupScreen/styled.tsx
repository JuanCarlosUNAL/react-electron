import MaterialIcon from '@mdi/react';
import styled, {css} from 'styled-components';

import bgImage from '../../assets/images/login-bg-3.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    background: url(${bgImage});
    background-position: center;
    background-size: cover;
    content: "";
    filter: sepia(0.5);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .label {
    color: white;
  }
  .radio-group {
    display: flex;
    margin-bottom: 1rem;
    font-weight: bold;
    width: 90%;

    .label {
      flex-grow: 1;
      text-align: center;
      cursor: pointer;

      &:hover {
        opacity: 70%;
      }
    }
  }
  .radio-button {
    width: 0;
    height: 0;

    &:checked ~.bottom-bar {
      margin: 0.5rem auto 0px auto;
      height: 0.1rem;
      width: 90%;
      background-color: white;
    }
  }
`;

const sectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 1rem;
`;

export const Section = styled.section`
  ${sectionCss}
`;

export const Form = styled.form`
  ${sectionCss}
  align-items: center;
  height: 18rem;
`;

export const ErrorMessage = styled.p`
  color: ${({theme}) => theme.colors.danger};
`;

export const TextInput = styled.input`
  background-color: transparent;
  text-align: center;
  border: none;
  border-bottom: solid 1px #8fc2be;
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  width: 90%;
  &::placeholder {
    color: #8fc2be;
  }
  &:focus {
    outline: none;
  }
`;

export const Icon = styled(MaterialIcon)`
  width: 4rem;
  height: 4rem;
  color: white;
`;

export const Divider = styled.hr`
  width: 100%; 
  margin: 0;
  border: none;
  border-bottom: solid 1px #8fc2be;
`;

export const LoginBox = styled.div`
  width: 17rem;
  background-color: #00544f;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;
