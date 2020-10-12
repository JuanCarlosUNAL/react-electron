import React from 'react';

import { Props } from './types';

const enhancer = (Comp: React.ComponentType<Props>): React.FC => () => {
  return <Comp
    timers={[]}
    edit={(id: string) => () => console.log(id)}
    pausePlay={(id: string) => () => console.log(id)}
    remove={(id: string) => () => console.log(id)}
  />;
};

export default enhancer;
