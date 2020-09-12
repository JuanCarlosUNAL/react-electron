import React from 'react';
import styled from 'styled-components';
import bgImage from '../../assets/images/login-bg-3.jpg';

import { Props } from './types';

const styles = (Component: React.ComponentType<Props>) => styled(Component)`
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

  .container {
    background-color: #00544f;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
  }
  hr { 
    width: 100%; 
    margin: 0;
    border: none;
    border-bottom: solid 1px #8fc2be;
  }
  .section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 1rem;
  }
  form {
    align-items: center;
    height: 18rem;
    width: 17rem;
    &>div {
      width: 90%;
    }
  }
  .label {
    color: white;
  }
  input {
    background-color: transparent;
    text-align: center;
    border: none;
    border-bottom: solid 1px #8fc2be;
    margin-top: 1rem;
    font-size: 1rem;
    color: white;
    width: 100%;
    &::placeholder {
      color: #8fc2be;
    }
    &:focus {
      outline: none;
    }
  }
  .submit {
    padding: .5rem 3rem;
    border: none;
    background-color: white;
    border-radius: 1rem;
    font-weight: bold;
    color: #00544f;
    margin-top: auto;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 70%;
    }
    &:active {
      opacity: 100%;
    }
  }
  .radio-group {
    display: flex;
    margin-bottom: 1rem;

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
  .icon {
    width: 4rem;
    height: 4rem;
    color: white;
  }
`;

export default styles;
