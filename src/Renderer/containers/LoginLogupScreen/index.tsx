import React from 'react';
import Icon from '@mdi/react';
import { mdiGiftOutline } from '@mdi/js';

import { Props, LoginOptions } from './types';
import enhancer from './enhancer';

const LoginLogupScreen: React.FC<Props> = ({
  className,
  errorMessage,
  onLogin,
  onLogup,
}) => {
  const [isRegistration, setIsRegistration] = React.useState<boolean>(false);
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
    if (isRegistration) {onLogup(email, password, confirmPass);}
    onLogin(email, password);
  };

  return (
    <div className={`${className} full-container`}>
      <div className="container">
        <form className="section" onSubmit={submitForm}>
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

          <Icon path={mdiGiftOutline} className="icon" />

          <div>
            <input
              value={email}
              type="text"
              id="email"
              name="email"
              placeholder="e-mail"
              onChange={({currentTarget}) => setEmail(currentTarget.value)}
            />
          </div>

          <div>
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={({currentTarget}) => setPassword(currentTarget.value)}
            />
          </div>

          {isRegistration && (
            <div>
              <input
                value={confirmPass}
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm password"
                onChange={({currentTarget}) => setConfirmPass(currentTarget.value)}
              />
            </div>
          )}
          <button className="submit">{buttonLabel}</button>
        </form>
        {!!errorMessage && (
          <>
            <hr />
            <section className="section">
              <p className="error-message">
                {errorMessage}
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default enhancer(LoginLogupScreen);
