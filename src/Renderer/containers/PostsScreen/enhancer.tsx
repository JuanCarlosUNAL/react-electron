import React from 'react';
import { firestore } from 'firebase';

import { Props, Timer } from './types';
import dayjs from 'dayjs';

const enhancer = (Comp: React.ComponentType<Props>): React.FC => () => {
  const [list, setList] = React.useState<Array<Timer>>([]);

  React.useEffect(() => {
    const db = firestore();
    db.collection('timers').get().then(({docs}) => {
      const castedList = docs.map((item) => {
        const {
          description,
          name,
          runningSince: {seconds: secondsSince},
          timeElapsedMillis,
        } = item.data();

        const runningSince = dayjs(secondsSince * 1000);

        return {
          id: item.id,
          description,
          name,
          runningSince,
          timeElapsedMillis,
        } as Timer;
      });

      setList(castedList);
    });
  }, []);

  return <Comp
    timers={list}
    edit={(id: string) => () => console.log(id)}
    pausePlay={(id: string) => () => console.log(id)}
    remove={(id: string) => () => console.log(id)}
  />;
};

export default enhancer;
