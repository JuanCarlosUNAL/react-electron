import styled, {css} from 'styled-components';
import MaterialIcon from '@mdi/react';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  border-radius: 0.5rem;
`;

export const Icon = styled(MaterialIcon)`
  color: white;
  width: 45px;
  height: 45px;
  margin-bottom: 2rem;
`;

const textStyleShared = css`
  box-sizing: border-box;
  background-color: transparent;
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  border-bottom: solid 1px ${({theme}) => theme.colors.lightPrimary};

  &::placeholder {
    color: ${({theme}) => theme.colors.lightPrimary};
  }
  &:focus {
    outline: none;
  }
`;

export const TextInput = styled.input`
  ${textStyleShared}
  text-align: center;
  width: 15rem;
`;

export const TextArea = styled.textarea`
  ${textStyleShared}
  resize: vertical;
  padding: 1rem;
  font-family: roboto;
  border-top: solid 1px ${({theme}) => theme.colors.lightPrimary};
  width: 20rem;
  height: 10rem;
`;
