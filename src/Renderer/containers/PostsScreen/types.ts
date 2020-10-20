import { Dayjs } from 'dayjs';

export interface Props {
  timers: Array<Timer>,
  edit: (id: string) => void,
  pausePlay: (id: string) => void,
  remove: (id: string) => void,
}

export interface Timer {
  description: string,
  id: string,
  name: string,
  runningSince: Dayjs | null,
  timeElapsedMillis: number,
}
