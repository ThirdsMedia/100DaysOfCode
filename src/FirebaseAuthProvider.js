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

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      })
  }

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  }

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      })
  }

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      })
  }

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(googleAuth)
      .then((response) => {
        const cred = response.credential;
        const token = cred.token;
        setUser(response.user)
        return response.user;
      });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    })

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithGoogle,
  };
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return (
    <UserContext.Provider value={auth}>
      {children}
    </UserContext.Provider>
  );
}
