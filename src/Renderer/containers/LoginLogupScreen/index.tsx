import React from 'react';
import Icon from '@mdi/react';
import { mdiGiftOutline } from '@mdi/js';

import { Props, LoginOptions } from './types';
import enhancer from './enhancer';

const LoginLogupScreen: React.FC<Props> = ({ className, submitForm }) => {
  const [isRegistration, setIsRegistration] = React.useState<boolean>(false);
  const buttonLabel = isRegistration ? 'Registrame' : 'Ingresar';
  const onChangeLogin: React.FormEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setIsRegistration(value === LoginOptions.LOGUP);
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
                name="registration"
                value={LoginOptions.LOGIN}
                onChange={onChangeLogin}
                checked={!isRegistration}
              />
              Login
              <div className="bottom-bar"/>
            </label>
            <label htmlFor="logup" className="label">
              <input
                className="radio-button"
                type="radio"
                id="logup"
                name="registration"
                value={LoginOptions.LOGUP}
                onChange={onChangeLogin}
                checked={isRegistration}
              />
              Logup
              <div className="bottom-bar"/>
            </label>
          </div>

          <Icon path={mdiGiftOutline} className="icon" />
          <div>
            <input type="text" id="username" name="username" placeholder="Username" />
          </div>

          <div>
            <input type="password" placeholder="Password" />
          </div>

          {isRegistration && (
            <div>
              <input type="password" placeholder="Confirm password" />
            </div>
          )}
          <button className="submit">{buttonLabel}</button>
        </form>
        {/* <hr/>
        <section className="section">
          <ul>
            <li>Password error</li>
            <li>Password error</li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default enhancer(LoginLogupScreen);
