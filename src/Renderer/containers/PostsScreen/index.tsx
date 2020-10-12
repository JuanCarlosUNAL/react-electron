import React from 'react';

import * as styled from './styled';
import TimeCard from './components/TimeCard';

import enhancer from './enhancer';
import { Props } from './types';
import NavBar from './components/NavBar';

export const PostsScreen: React.FC<Props> = ({timers, edit, pausePlay, remove}) => (
  <styled.Container>
    <NavBar />
    <styled.GridContainer>
      {timers.map(({id, name, description, runningSince, timeElapsedMillis}) => (
        <TimeCard
          name={name}
          description={description}
          runningSince={runningSince}
          timeElapsedMillis={timeElapsedMillis}
          onEdit={edit(id)}
          onPausePlay={pausePlay(id)}
          onRemove={remove(id)}
        />
      ))}
    </styled.GridContainer>
  </styled.Container>
);

export default enhancer(PostsScreen);
