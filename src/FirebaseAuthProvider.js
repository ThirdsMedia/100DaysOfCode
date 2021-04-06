import { 
  useState, 
  useEffect,
  useContext,
  createContext 
} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.background,
    justifyContent: 'center',
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const googleAuth = new firebase.auth.GoogleAuthProvider();
  const storageRef = firebase.storage().ref()

  const signin = (email, password) => {
    setLoading(true)

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user)
        return response.user;
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false)
        setError(null)
      })
  }

  const signup = (displayName, phone, email, password) => {
    setLoading(true)

    // this doesn't display the error
    if (!displayName) {
      setLoading(false)
      setError("You must specify a display name!")
    } 

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid
        const userData = Object.assign({}, {
          id: uid,
          email,
          displayName,
          phone,
          bio: '',
          twitter: '',
          instagram: '',
          website: '',
          picture: '',
          favorites: [],
        });

        // User was already added to the Auth database, now add it to firestore
        const userRef = firebase.firestore().collection("users")
        userRef
          .doc(uid)
          .set(userData)
          .then(() => setUser(response.user))
          .catch((e) => setError(e.message))
          .finally(() => firebase.auth().signOut())
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false)
        setError(null)
      });
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
        setError(null)
      })
  }

  const updateUser = (userData) => {
    const userRef = firebase.firestore().collection("users");
    if (user) {
      return userRef
        .doc(user.id)
        .update(userData)
        .then(() => {
          console.log("successfully updated user")
        })
    }
  }

  const uploadImageToStorage = (image, name) => {
    const imageRef = storageRef.child(`${user.id}/images/${name}`)

    return imageRef
      .put(image)
      .then((snapshot) => {
        return imageRef.getDownloadURL()
      })
  }

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => true)
  }

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => true)
  }

  const signInWithGoogle = () => {
    setLoading(true);

    return firebase
      .auth()
      .signInWithPopup(googleAuth)
      .then((response) => {
        //const cred = response.credential;
        //const token = cred.token;
        setUser(response.user)
        return response.user;
      })
      .finally(() => setLoading(false));
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
            setUser(userData)
            setLoading(false)
          })
      } else {
        setLoading(false)
        setUser(false)
      }
    })

    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    loading,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithGoogle,
    updateUser,
    uploadImageToStorage,
  };
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  const classes = useStyles();

  if (auth.loading) {
    return (
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  return (
    <UserContext.Provider value={auth}>
      {children}
    </UserContext.Provider>
  );
}
