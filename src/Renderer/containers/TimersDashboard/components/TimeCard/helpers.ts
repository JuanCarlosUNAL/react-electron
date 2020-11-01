import dayjs, { Dayjs } from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';

export function calcTimeElapsed(timeElapsedMillis: number, runningSince: Dayjs | null): Duration {
  const diffMillis = runningSince
    ? dayjs().diff(runningSince)
    : 0;
  const totalDuration = timeElapsedMillis + diffMillis;
  return dayjs.duration(totalDuration);
}

export function formatText(timeElapsed: Duration): string {
  let seconds: string | number = timeElapsed.seconds();
  let minutes: string | number = timeElapsed.minutes();
  let hours: string | number = timeElapsed.hours();

  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  hours = hours < 10 ? `0${hours}` : `${hours}`;

  return `${hours}:${minutes}:${seconds}`;
}
