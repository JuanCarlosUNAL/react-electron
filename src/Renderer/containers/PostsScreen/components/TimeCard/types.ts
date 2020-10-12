import { Timer } from '../../types';

export interface Props extends Omit<Timer, 'id'> {
  onPausePlay: () => void,
  onRemove: () => void,
  onEdit: () => void,
}
