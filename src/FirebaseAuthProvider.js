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

/* 
 * Auth API reference
 * https://firebase.google.com/docs/reference/js/firebase.auth.Auth
 */

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
  const [error, setError] = useState(null);
  const googleAuth = new firebase.auth.GoogleAuthProvider();
  const [loading, setLoading] = useState(false)

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      })
      .catch((e) => setError(e))
  }

  const signup = (displayName, email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          displayName,
        }
        const userRef = firebase.firestore().collection("users")
        userRef.doc(uid).set(data).then(() => {
          setUser(response.user);
        })
        .catch((e) => setError(e))
        return response.user;
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      })
      .catch((e) => setError(e))
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
      })
      .catch((e) => setError(e))
  }

  useEffect(() => {
    const userRef = firebase.firestore().collection("users");
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            console.log("User uid: ", user.uid, "User: ", user, "Document data: ", document.data())
            setUser(userData)
          })
      } else {
        setUser(false)
      }
    })

    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
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
