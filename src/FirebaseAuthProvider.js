import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { 
  useState, 
  useEffect,
  useContext,
  createContext 
} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loadingScreen: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
  },
}));

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const UserContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const googleAuth = new firebase.auth.GoogleAuthProvider();
  const [loading, setLoading] = useState(false)

  const signin = (email, password) => {
    setLoading(true)

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      })
      .finally(() => setLoading(false))
  }

  const signup = (email, password) => {
    setLoading(true)

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      })
      .finally(() => setLoading(false))
  }

  const signout = () => {
    setLoading(true)

    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      })
      .finally(() => setLoading(false))
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
    setLoading(true)
    
    return firebase
      .auth()
      .signInWithPopup(googleAuth)
      .then((response) => {
        const cred = response.credential;
        const token = cred.token;
        setUser(response.user)
        return response.user;
      })
      .finally(() => setLoading(false))
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
    loading,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithGoogle,
  };
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  const classes = useStyles();

  if (auth.loading) {
    return (
      <div className={classes.loadingScreen}>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <UserContext.Provider value={auth}>
      {children}
    </UserContext.Provider>
  );
}
