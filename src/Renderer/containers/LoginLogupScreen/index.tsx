import React from 'react';
import { Link } from 'react-router-dom';

import enhancer from './enhancer';
import useStyles from './useStyles';

export interface Props {}

enum LoginOptions {
  LOGIN = 'LOGIN',
  LOGUP = 'LOGUP'
}

const LoginLogupScreen: React.FC<Props> = () => {
  const styles = useStyles();
  const [isLogin, setIsLogin] = React.useState<boolean>(true);
  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => setIsLogin(e.target.value === LoginOptions.LOGIN);
  const submitForm = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send data")
  }

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
      <Link to="users">Users</Link>
    </div>
  );
}
 
export default enhancer(LoginLogupScreen);
