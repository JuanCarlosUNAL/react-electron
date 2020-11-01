import { Dayjs } from 'dayjs';

export interface Props {
  timers: Array<ITimer>,
  edit: (id: string) => void,
  pausePlay: (id: string) => void,
  remove: (id: string) => void,
  newCard: () => void,
  logout: () => void,
}

export interface ITimer {
  description: string,
  id: string,
  name: string,
  runningSince: Dayjs | null,
  timeElapsedMillis: number,
}
