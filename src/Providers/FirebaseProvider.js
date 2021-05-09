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
  const baseData = {
    bio: '',
    favorites: [],
    followers: [],
    following: [],
    isVerified: false,
    google: '',
    instagram: '',
    twitter: '',
    website: '',
  };

  const signup = (data) => {
    setLoading(true)

    return firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(response => {
        delete(data.password);
        delete(data.confirm);

        firebase.firestore().collection("users")
          .doc(response.user.uid)
          .set({
            ...data,
            ...baseData,
            id: response.user.uid,
            isAdmin: false,
          })
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setError(null);
        setLoading(false);
        verifyUserEmail();
      });
  }

  const signUpAsBusiness = (data) => {
    setLoading(true);

    return firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(response => {
        delete(data.password);
        delete(data.confirm);

        firebase.firestore().collection("users")
          .doc(response.user.uid)
          .set({
            ...data,
            ...baseData,
            id: response.user.uid,
            isAdmin: true,
          })
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setError(null);
        setLoading(false);
      });
  }

  const setCurrentUser = (user) => setUser(user)

  // send a verification email
  const verifyUserEmail = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification().then(() => console.log("Email sent successfully"));
  }

  // Compare the password and confirm password fields
  const checkPasswordIntegrity = (password, confirm) => {
    if (confirm !== password) {
      setError("Passwords do not match")
    }
    setLoading(false);
  }

  const checkIsEmailVerified = () => {
    return firebase.auth().currentUser.emailVerified ? true : false
  }

  const isAlreadyLoggedIn = () => {
    return firebase.auth().currentUser ? true : false
  }
  
  const updateUser = (userData) => {
    const userRef = firebase.firestore().collection("users");

    if (user) {
      return userRef
        .doc(user.id)
        .update(userData)
        .then(() => console.log("successfully updated user"));
    }
  }

  const uploadImageToStorage = (image) => {
    const imageRef = firebase.storage().ref().child(`${user.id}/images/${image.name}`)

    return imageRef
      .put(image)
      .then((snapshot) => {
        if (snapshot.state === 'success') {
          return imageRef.getDownloadURL();
        } else {
          setError("Upload error: ", snapshot.state);
        }
      })
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
    setCurrentUser,
    signup,
    signUpAsBusiness,
    isAlreadyLoggedIn,
    updateUser,
    uploadImageToStorage,
    checkPasswordIntegrity,
    checkIsEmailVerified,
    sendPasswordResetEmail,
    confirmPasswordReset,
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

