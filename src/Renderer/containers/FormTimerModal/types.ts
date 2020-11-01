import { ITimer } from '../TimersDashboard/types';

export type FormFieldsType = Pick<ITimer, 'description' | 'name'>

export interface Props {
  onCloseModal: () => void;
  onCreateNewTimer: (name: string, description: string) => void;
  timer: FormFieldsType;
}
