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
    height: 10rem;
    width: 15rem;
    max-width: 20rem;
    flex-grow: 1;
    margin: 0.5rem;
    padding: 1rem;

    &:nth-child(2n+1) {
      background-color: green; 
    }
    &:nth-child(2n) {
      background-color: lavender;
    }
  }
`;


export default styles;
