import React from 'react';

export enum ButtonTypes {
  info = 'info',
  warning = 'warning',
  error = 'error',
  default = 'default',
  success = 'success',
}

export interface Props {
  /**
   * Class from styled components
   */
  className?: string;
  /**
   * Button label
   */
  children: React.ReactNode;
  /**
   * Style modifier
   */
  disabled?: boolean;
  /**
   * Button type
   */
  type?: ButtonTypes,
  /**
   * Click event
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}
