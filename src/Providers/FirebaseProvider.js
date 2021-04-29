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

const useStyles = makeStyles({
  root: {
    display: 'flex',
    backgroundColor: '#202020',
    height: '100vh',
    justifyContent: 'center',
  },
});

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

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
}

function useFirebaseProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const googleAuth = new firebase.auth.GoogleAuthProvider();
  const storageRef = firebase.storage().ref();

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

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const userData = Object.assign({}, {
          id: response.user.uid,
          email,
          displayName,
          phone,
          bio: '',
          twitter: '',
          instagram: '',
          website: '',
          picture: '',
          favorites: [],
        })
        firebase.firestore().collection("users").doc(response.user.id).set(userData)
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setLoading(false)
        setError(null)
      })
  }

  const signout = () => {
    console.log("It's signing you out automatically");
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
        .catch((e) => setError(e))
    }
  }

  const uploadImageToStorage = (image, name) => {
//    const imageRef = storageRef.child(`${user.id}/images/${name}`)
    const imageRef = storageRef.child(name)

    // This successfully updates the user's picture in Firestore. Now to just get it to display on Profile
    imageRef
      .put(image)
      .then((snapshot) => {
        imageRef.getDownloadURL().then((url) => {
          updateUser({picture: url})
        })
      })
      .catch((e) => setError(e))
  }

  const sendContactEmail = (formData) => {
    const emailRef = firebase.firestore().collection("emails");

    return new Promise((resolve, reject) => {
      emailRef.add({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        message: formData.message,
        time: new Date(),
      })
      .then(() => resolve(console.log("Successfully added email to database")))
      .catch((e) => {
        reject("Failed to submit contact form. Perhaps you forgot to fill out a required input?")
      })
    })
  }

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => true)
      .catch((e) => setError(e))
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
    user,     // the user object
    error,    // the error message
    loading,  // the loading boolean
    signin, 
    signup,
    signout,
    signInWithGoogle,
    sendPasswordResetEmail,
    confirmPasswordReset,
    updateUser,
    uploadImageToStorage,
    sendContactEmail,
  };
}

export function FirebaseProvider({ children }) {
  const classes = useStyles();
  const firebase = useFirebaseProvider();

  if (firebase.loading) {
    return (
      <div className={classes.root}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}