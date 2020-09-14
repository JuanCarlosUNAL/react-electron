import React from 'react';

export interface Props {
  submitForm: React.FormEventHandler<HTMLFormElement>;
  className?: string,
}

export enum LoginOptions {
  LOGIN = 'LOGIN',
  LOGUP = 'LOGUP'
}
