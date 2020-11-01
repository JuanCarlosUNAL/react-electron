import React from 'react';
import { firestore } from 'firebase/app';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import FormTimerModal from '../../containers/FormTimerModal';

const NewTimerEnhancer: React.FC = () => {
  const history = useHistory();
  const db = React.useMemo(firestore, []);

  const closeModal = () => history.goBack();
  const createTimer = (name: string, description: string) => {
    const today = dayjs().toDate();
    if (!description.trim() || !name.trim()){ return; }
    db.collection('timers').add({
      name,
      description,
      runningSince: Number(today),
      timeElapsedMillis: 0,
    }).finally(closeModal);
  };

  return <FormTimerModal
    onCloseModal={closeModal}
    onCreateNewTimer={createTimer}
    timer={{description: '', name: ''}}
  />;
};

export default NewTimerEnhancer;
