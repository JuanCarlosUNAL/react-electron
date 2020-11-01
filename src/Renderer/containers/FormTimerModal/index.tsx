import React from 'react';
import { mdiClose } from '@mdi/js';

import NewTimerForm from './components/TimerForm';

import * as styled from './styled';
import { Props } from './types';

export const FormTimerModal: React.FC<Props> = ({
  onCloseModal,
  onCreateNewTimer,
  timer,
}) => {
  return (
    <styled.ModalContainer>
      <styled.Modal>
        <NewTimerForm sendForm={onCreateNewTimer} timerFields={timer}/>
      </styled.Modal>
      <styled.Button onClick={onCloseModal}>
        <styled.Icon path={mdiClose}/>
      </styled.Button>
    </styled.ModalContainer>
  );
};

export default FormTimerModal;
