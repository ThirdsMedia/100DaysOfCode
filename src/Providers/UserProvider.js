import React, { 
  useState, 
  useEffect,
  createContext 
} from 'react';
import { auth } from '../firebase';

export const UserContext = createContext({ user: null });

export default function UserProvider() {
  const [user, setUser] = useState({user: null});

  // this should be useEffect()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser({user: userAuth});
    })
  });

  return (
    <UserContext.Provider value={user}>
    </UserContext.Provider>
  );
}
