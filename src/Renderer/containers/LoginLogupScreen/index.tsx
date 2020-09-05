import React from 'react';
import { Props } from './types';
import enhancer from './enhancer';

const LoginLogupScreen: React.FC<Props> = ({ className, submitForm }) => {
  const [isRegistration, setIsRegistration] = React.useState<boolean>(false);
  const onChangeLogin: React.FormEventHandler<HTMLInputElement> = () => setIsRegistration(!isRegistration);

  return (
    <div className={className}>
      <form onSubmit={submitForm}>
        <h2>Bienvenido</h2>
        <label htmlFor="logup" className="label">
          <input type="checkbox" id="logup" name="registration" onChange={onChangeLogin} checked={isRegistration} />
          Registrame
        </label>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div>
          <label htmlFor="logup">Password</label>
          <input type="password" />
        </div>

        { isRegistration && (
          <div>
            <label htmlFor="logup">Confirm password</label>
            <input type="password" />
          </div>
        )}
        <button>Subscribe/Login</button>
      </form>
    </div>
  );
};

export default enhancer(LoginLogupScreen);
