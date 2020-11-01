import React from 'react';
import { mdiPencil, mdiDelete, mdiStop, mdiPlay } from '@mdi/js';
import { Duration } from 'dayjs/plugin/duration';

import { ButtonTypes } from '../../../../components/Button/types';
import ButtonGroup from '../../../../components/ButtonGroup';

import * as helpers from './helpers';
import * as styled from './styled';
import { Props } from './types';

const UPDATE_PERIOD = 100;

const TimeCard: React.FC<Props> = ({
  id,
  name,
  description,
  timeElapsedMillis,
  runningSince,
  onPausePlay,
  onRemove,
  onEdit,
  onRearrangeList,
}) => {
  const [dragHover, setDragHover] = React.useState<number>(0);
  const [isBeingDragged, setIsBeingDragged] = React.useState<boolean>(false);
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

  const onDragEnter = () => {
    if (!isBeingDragged) {setDragHover(dragHover + 1);}
  };
  const onDragLeave = () => {
    if (!isBeingDragged) {setDragHover(dragHover - 1);}
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsBeingDragged(true);
    e.dataTransfer.setData('originId', id);
  };
  const onDragEnd = () => {
    setIsBeingDragged(false);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setDragHover(0);
    const originId = e.dataTransfer.getData('originId');
    onRearrangeList(originId, id);
  };

  const timeEllapsedString = helpers.formatText(timeElapsed);
  const stopPlayLabel = runningSince ? 'Stop' : 'Play';
  const stopPlayIcon = runningSince ? mdiStop : mdiPlay;
  const stopPlayButtonType = runningSince ? ButtonTypes.warning : ButtonTypes.success;

  return (
    <styled.Container
      id={id}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <styled.DragOverContainer className={dragHover ? 'show' : ''}>
        <h2>Drop it here</h2>
      </styled.DragOverContainer>
      <styled.ContentContainer className={isBeingDragged ? 'picked' : ''}>
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
      </styled.ContentContainer>
    </styled.Container>
  );
};

export default TimeCard;
