import React from 'react';
import { mdiPencil, mdiDelete, mdiStop, mdiPlay } from '@mdi/js';
import { Duration } from 'dayjs/plugin/duration';

import { ButtonTypes } from '../../../../components/Button/types';
import ButtonGroup from '../../../../components/ButtonGroup';

import * as helpers from './helpers';
import * as styled from './styled';
import { Props } from './types';

const UPDATE_PERIOD = 100;

const TimeCard: React.FC<Props> = ({name, description, timeElapsedMillis, runningSince, onPausePlay, onRemove, onEdit }) => {
  const [timeElapsed, setTimeElapsed] = React.useState<Duration>(
    helpers.calcTimeElapsed(timeElapsedMillis, runningSince)
  );
  React.useEffect(() => {
    const timeoutId = setInterval(() => {
      setTimeElapsed(
        helpers.calcTimeElapsed(timeElapsedMillis, runningSince
      ));
    }, UPDATE_PERIOD);
    return () => clearTimeout(timeoutId);
  }, [runningSince, timeElapsedMillis]);

  const timeEllapsedString = helpers.formatText(timeElapsed);

  const stopPlayLabel = runningSince ? 'Stop' : 'Play';
  const stopPlayIcon = runningSince ? mdiStop : mdiPlay;
  const stopPlayButtonType = runningSince ? ButtonTypes.warning : ButtonTypes.success;

  return (
    <styled.Container>
      <styled.Time>{timeEllapsedString}</styled.Time>
      <h3>{name}</h3>
      <styled.Description>{description}</styled.Description>
      <styled.JustifyRight>
        <ButtonGroup>
          <styled.Button onClick={onEdit}>
            <styled.Icon path={mdiPencil} />
            <span>Edit</span>
          </styled.Button>
          <styled.Button type={stopPlayButtonType} onClick={onPausePlay}>
            <styled.Icon path={stopPlayIcon} />
            <span>{stopPlayLabel}</span>
          </styled.Button>
          <styled.Button type={ButtonTypes.error} onClick={onRemove}>
            <styled.Icon path={mdiDelete} />
            <span>Delete</span>
          </styled.Button>
        </ButtonGroup>
      </styled.JustifyRight>
    </styled.Container>
  );
};

export default TimeCard;
