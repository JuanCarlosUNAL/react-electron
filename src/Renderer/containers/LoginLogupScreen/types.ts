export type onLoginType = (email: string, pass: string) => void;
export type onLogupType = (email: string, pass: string, confirmPass: string) => void;

export interface Props {
  errorMessage: string;
  initTab?: LoginOptions;
  onLogin: onLoginType;
  onLogup: onLogupType;
}

export enum LoginOptions {
  LOGIN = 'LOGIN',
  LOGUP = 'LOGUP'
}
