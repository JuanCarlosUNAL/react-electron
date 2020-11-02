import React from 'react';
import firebase from 'firebase/app';

import { FirebaseContextType } from './types';
import FirebaseContext from './context';

const FirebaseProvider: React.FC = ({children}) => {
  const auth = React.useMemo(() => firebase.auth(), []);
  const db = React.useMemo(() => firebase.firestore(), []);

  const firebaseValues: FirebaseContextType = { auth, db };

  return (
    <FirebaseContext.Provider value={firebaseValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

export const useFirebase = () => React.useContext(FirebaseContext);
