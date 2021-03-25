import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { 
  useState, 
  useEffect,
  useContext,
  createContext 
} from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDZ3smBta_GOW7fzVy8qpBtzMk1qmary9k",
  authDomain: "jade-eb502.firebaseapp.com",
  projectId: "jade-eb502",
  storageBucket: "jade-eb502.appspot.com",
  messagingSenderId: "721679399426",
  appId: "1:721679399426:web:15b53923d1e5e488b1451b",
  measurementId: "G-RL1MY8YZT3"
};
firebase.initializeApp(firebaseConfig);

const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    })

    return () => unsubscribe();
  }, [])

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
}
