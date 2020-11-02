import { auth, firestore } from 'firebase/app';

export interface FirebaseContextType {
  db: firestore.Firestore,
  auth: auth.Auth,
}

export type OptionalsFirebaseContextType = Partial<FirebaseContextType>;
