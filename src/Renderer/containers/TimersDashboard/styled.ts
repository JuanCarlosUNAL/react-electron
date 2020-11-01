import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const GridContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;
