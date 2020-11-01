import { FormFieldsType } from '../../types';

export interface Props {
  sendForm: (name: string, description: string) => void;
  timerFields: FormFieldsType
}
