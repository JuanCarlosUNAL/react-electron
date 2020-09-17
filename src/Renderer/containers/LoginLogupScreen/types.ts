export type onLoginType = (email: string, pass: string) => void;
export type onLogupType = (email: string, pass: string, confirmPass: string) => void;

export interface Props {
  onLogup: onLogupType;
  onLogin: onLoginType;
  className?: string;
  errorMessage: string;
  vanishError: () => void;
}

export enum LoginOptions {
  LOGIN = 'LOGIN',
  LOGUP = 'LOGUP'
}
