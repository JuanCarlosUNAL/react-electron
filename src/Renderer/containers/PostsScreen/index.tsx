import React from 'react';

import * as styled from './styled';
import TimeCard from './components/TimeCard';

import enhancer from './enhancer';
import { Props, Timer } from './types';
import NavBar from './components/NavBar';

export const PostsScreen: React.FC<Props> = ({timers: originalTimers, edit, pausePlay, remove}) => {
  const [timers, setTimers] = React.useState<Timer[]>(originalTimers);
  const rearrangeList = (idOrigin: string, idDestiny: string) => {
    if (idOrigin === idDestiny) {return;}
    const originTimer = timers.find(({id}) => id === idOrigin);
    const newTimers = timers
      .filter(({id}) => id !== idOrigin)
      .reduce<Timer[]>((currenNewList, currentTimer) => (currentTimer.id === idDestiny
        ? [...currenNewList, originTimer, currentTimer]
        : [...currenNewList, currentTimer]
      ) as Timer[], []);
    setTimers(newTimers);
  };

  return (
    <styled.Container>
      <NavBar />
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

export default enhancer(PostsScreen);
