import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { firestore } from 'firebase';

import FormTimerModal from '../../containers/FormTimerModal';
import {FormFieldsType} from '../../containers/FormTimerModal/types';
import { useFirebase } from '../../Providers/FirebaseProvider';

const EditTimerEnhancer: React.FC = () => {
  const [timerFormFields, setTimerFormFields] = React.useState<FormFieldsType>({name: '', description: ''});
  const [timerReference, setTimerReference] = React.useState<firestore.DocumentReference>();
  const { db } = useFirebase();
  const history = useHistory();
  const { timerId } = useParams<{timerId: string}>();

  const closeModal = () => {
    history.goBack();
  };
  React.useEffect(() => {
    const fetchTimer = async () => {
      const documentRef = db?.collection('timers').doc(timerId);
      if (!documentRef) {throw new Error('timer reference not found');}
      setTimerReference(documentRef);

      const document = await documentRef.get();
      const timerData = document.data();
      setTimerFormFields(timerData as FormFieldsType);
    };
    fetchTimer();
  }, [db, timerId]);

  const modifyTimer = async (name: string, description: string) => {
    if (!timerReference) {return;}
    await timerReference.update({ name, description });
    closeModal();
  };

  return <FormTimerModal
    onCloseModal={closeModal}
    timer={timerFormFields}
    onSubmit={modifyTimer}
  />;
};

export default EditTimerEnhancer;
