import React, {useState, SyntheticEvent, FormEvent, ChangeEvent} from 'react';
import enhancer from './enhancer';

export interface Props {
  
}

enum LoginOptions {
  LOGIN,
  LOGUP
}
 
const LoginLogupScreen: React.FC<Props> = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const onChangeLogin = (event: ChangeEvent<HTMLInputElement>) => setIsLogin(event.target.value === 'login')

  return (
    <div>
      <h2>Bienvenido</h2>
      <form>
        <input type="radio" id="login" name="gender" value={LoginOptions.LOGIN} onChange={onChangeLogin} checked={isLogin} />
        <label htmlFor="login">Login</label>
        
        <input type="radio" id="logup" name="gender" value={LoginOptions.LOGUP} onChange={onChangeLogin} checked={!isLogin} />
        <label htmlFor="logup">Logup</label>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="logup">Password</label>
        <input type="password" />

        { !isLogin && (
          <>
          <label htmlFor="logup">Password</label>
          <input type="password" />
          </>
        )}

      </form>
    </div>
  );
}
 
export default enhancer(LoginLogupScreen);
