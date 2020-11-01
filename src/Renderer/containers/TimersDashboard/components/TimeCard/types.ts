import { ITimer } from '../../types';

export interface Props extends ITimer{
  onPausePlay: () => void,
  onRemove: () => void,
  onEdit: () => void,
  onRearrangeList: (idOrigin: string, idDestiny: string) => void,
}
