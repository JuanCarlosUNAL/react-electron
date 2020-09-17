import React from "react";
import styled from 'styled-components';
import { Props } from './types';

const styles = (Component: React.ComponentType<Props>) => styled(Component)`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  .navbar {
    display: flex;
    width: 100%;
    padding: 0.5rem 1rem;
    flex-direction: row-reverse;
  }

  .box {
    display: flex;
    flex-direction: column;
    height: 10rem;
    width: 15rem;
    max-width: 20rem;
    flex-grow: 1;
    margin: 0.5rem;
    padding: 1rem;
    border: solid 1px;

    &:nth-child(2n+1) {
      border-color: lavender;
    }
    &:nth-child(2n) {
      border-color: lightgray;
    }
  }
  
`;


export default styles;
