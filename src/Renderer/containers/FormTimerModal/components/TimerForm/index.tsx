import React from 'react';
import { mdiClockOutline } from '@mdi/js';

import * as styled from './styled';
import { Props } from './types';

import Button from '../../../../components/Button';


const NewTimerForm: React.FC<Props> = ({sendForm, timerFields}) => {
  const [name, setName] = React.useState<string>(timerFields.name);
  const [description, setDescription] = React.useState<string>(timerFields.description);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendForm(description, name);
  };

  return (
    <styled.Form onSubmit={onSubmit} >
      <styled.Icon path={mdiClockOutline} />
      <styled.TextInput
        name="name"
        placeholder="Name"
        id="name"
        type="text"
        value={name}
        onChange={({currentTarget}) => setName(currentTarget.value)}
      />
      <styled.TextArea
        placeholder="Description"
        id="description"
        value={description}
        onChange={({currentTarget}) => setDescription(currentTarget.value)}
      />
      <Button>Create</Button>
    </styled.Form>
  );
};

export default NewTimerForm;
