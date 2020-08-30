import React from 'react';

import enhancer from './enhancer';
import useStyles from './useStyles';

export interface Props {
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

enum LoginOptions {
  LOGIN = 'LOGIN',
  LOGUP = 'LOGUP'
}

const LoginLogupScreen: React.FC<Props> = ({ submitForm }: Props) => {
  const styles = useStyles();
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => setIsLogin(e.target.value === LoginOptions.LOGIN);

  return (
    <div>
      <form onSubmit={submitForm}>
        <h2>Bienvenido</h2>
        <div>
          <input type="radio" id="login" name="gender" value={LoginOptions.LOGIN} onChange={onChangeLogin} checked={isLogin} />
          <label htmlFor="login">Login</label>
          <input type="radio" id="logup" name="gender" value={LoginOptions.LOGUP} onChange={onChangeLogin} checked={!isLogin} />
          <label htmlFor="logup">Logup</label>
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div>
          <label htmlFor="logup">Password</label>
          <input type="password" />
        </div>

        { !isLogin && (
          <div>
            <label htmlFor="logup">Confirm password</label>
            <input type="password" />
          </div>
        )}
        <button className={styles.myButton}>Subscribe/Login</button>
      </form>
    </div>
  );
};

export default enhancer(LoginLogupScreen);
