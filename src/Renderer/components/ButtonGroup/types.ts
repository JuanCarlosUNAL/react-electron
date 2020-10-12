import React from 'react';
import {Props as ButtonProps} from '../Button/types';

type ButtonType = React.ReactElement<ButtonProps>;

export interface Props {
  children: ButtonType | Array<ButtonType>;
}
