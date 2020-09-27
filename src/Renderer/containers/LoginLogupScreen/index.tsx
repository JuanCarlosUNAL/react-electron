import React from 'react';

import { mdiGiftOutline } from '@mdi/js';

import { Props, LoginOptions } from './types';
import * as styled from './styled';
import enhancer from './enhancer';

import Button from '../../components/Button';

export const LoginLogupScreen: React.FC<Props> = ({
  errorMessage,
  onLogin,
  onLogup,
  initTab = LoginOptions.LOGIN,
}) => {
  const [isRegistration, setIsRegistration] = React.useState<boolean>(initTab === LoginOptions.LOGUP);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPass, setConfirmPass] = React.useState<string>('');
  const buttonLabel = isRegistration ? 'Registrame' : 'Ingresar';


  const onChangeLogin: React.FormEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setIsRegistration(value === LoginOptions.LOGUP);
  };

  const submitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (isRegistration) { onLogup(email, password, confirmPass); }
    else { onLogin(email, password); }
  };

  return (
    <styled.Container className="full-container">
      <styled.LoginBox>
        <styled.Form onSubmit={submitForm}>
          <div className="radio-group">
            <label htmlFor="login" className="label">
              <input
                className="radio-button"
                type="radio"
                id="login"
                name="login"
                value={LoginOptions.LOGIN}
                onChange={onChangeLogin}
                checked={!isRegistration}
              />
              Login
              <div className="bottom-bar" />
            </label>
            <label htmlFor="logup" className="label">
              <input
                className="radio-button"
                type="radio"
                id="logup"
                name="logup"
                value={LoginOptions.LOGUP}
                onChange={onChangeLogin}
                checked={isRegistration}
              />
              Logup
              <div className="bottom-bar" />
            </label>
          </div>

          <styled.Icon path={mdiGiftOutline} />
          <styled.TextInput
            value={email}
            type="text"
            id="email"
            name="email"
            placeholder="e-mail"
            onChange={({currentTarget}) => setEmail(currentTarget.value)}
          />
          <styled.TextInput
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={({currentTarget}) => setPassword(currentTarget.value)}
          />

          {isRegistration && (
            <styled.TextInput
              value={confirmPass}
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm password"
              onChange={({currentTarget}) => setConfirmPass(currentTarget.value)}
            />
          )}
          <Button>{buttonLabel}</Button>
        </styled.Form>
        {!!errorMessage && (
          <>
            <styled.Divider/>
            <styled.Section>
              <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
            </styled.Section>
          </>
        )}
      </styled.LoginBox>
    </styled.Container>
  );
};

export default enhancer(LoginLogupScreen);
