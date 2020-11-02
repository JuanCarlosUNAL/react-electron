import React from 'react';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';

import TimersDashboard from '../../containers/TimersDashboard';
import { ITimer } from '../../containers/TimersDashboard/types';
import { useFirebase } from '../../Providers/FirebaseProvider';

const TimersDashboardEnhancer: React.FC = () => {
  const [list, setList] = React.useState<ITimer[]>([]);
  const {db, auth } = useFirebase();
  const history = useHistory();

  React.useEffect(() => {
    db?.collection('timers').onSnapshot(({docs}) => {
      const data = docs
        .map<any>((item) => ({id: item.id, ...item.data()}))
        .map((timer) => ({ ...timer,
          runningSince: timer.runningSince && dayjs(timer.runningSince),
        } as ITimer));
      setList(data);
    });
  }, [db]);

  const pausePlay = React.useCallback(async (timerId: string) => {
    const document = await db?.collection('timers').doc(timerId);
    if (!document) { throw new Error('timer document not found');}

    const timer = list.find(({id}) => id === timerId);
    if (!timer) {throw new Error('Unexpected: timer not found');}

    const todayDate = dayjs().toDate();
    if (timer.runningSince) {
      const runningSinceDate = timer.runningSince?.toDate();
      const timeOffset = Number(todayDate) - Number(runningSinceDate);

      document.update({
        runningSince: null,
        timeElapsedMillis: timeOffset + timer.timeElapsedMillis,
      });
    } else {
      document.update({
        runningSince: Number(todayDate),
      });
    }
  }, [list,db]);

  const removeTimer = async (timerId: string) => {
    const document = await db?.collection('timers').doc(timerId);
    if (!document) {throw new Error('timer document not found');}
    document.delete();
  };

  const newCard = () => {
    history.push('/users/newCard');
  };

  const editCard = (timerId: string) => {
    history.push(`/users/editCard/${timerId}`);
  };

  const logout = () => {
    if (!auth) {return;}
    auth.signOut();
    history.goBack();
  };

  return <TimersDashboard
    timers={list}
    edit={editCard}
    pausePlay={pausePlay}
    remove={removeTimer}
    logout={logout}
    newCard={newCard}
  />;
};

export default TimersDashboardEnhancer;
