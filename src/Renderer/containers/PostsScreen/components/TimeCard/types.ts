import { Timer } from '../../types';

export interface Props extends Timer{
  onPausePlay: () => void,
  onRemove: () => void,
  onEdit: () => void,
  onRearrangeList: (idOrigin: string, idDestiny: string) => void,
}
