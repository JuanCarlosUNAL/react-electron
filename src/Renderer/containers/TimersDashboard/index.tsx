import React from 'react';

import * as styled from './styled';
import TimeCard from './components/TimeCard';

import { Props, ITimer } from './types';
import NavBar from './components/NavBar';

export const TimersDashboard: React.FC<Props> = ({timers: originalTimers, edit, pausePlay, remove, newCard, logout}) => {
  const [timers, setTimers] = React.useState<ITimer[]>(originalTimers);
  React.useEffect(() => setTimers(originalTimers), [originalTimers]);
  const rearrangeList = (idOrigin: string, idDestiny: string) => {
    if (idOrigin === idDestiny) {return;}
    const originTimer = timers.find(({id}) => id === idOrigin);
    const newTimers = timers
      .filter(({id}) => id !== idOrigin)
      .reduce<ITimer[]>((currenNewList, currentTimer) => (currentTimer.id === idDestiny
        ? [...currenNewList, originTimer, currentTimer]
        : [...currenNewList, currentTimer]
      ) as ITimer[], []);
    setTimers(newTimers);
  };

  return (
    <styled.Container>
      <NavBar onNewCard={newCard} logout={logout} />
      <styled.GridContainer>
        {timers.map(({id, name, description, runningSince, timeElapsedMillis}) => (
          <TimeCard
            key={id}
            id={id}
            name={name}
            description={description}
            runningSince={runningSince}
            timeElapsedMillis={timeElapsedMillis}
            onEdit={() => edit(id)}
            onPausePlay={() => pausePlay(id)}
            onRemove={() => remove(id)}
            onRearrangeList={rearrangeList}
          />
        ))}
      </styled.GridContainer>
    </styled.Container>
  );
};

export default TimersDashboard;
