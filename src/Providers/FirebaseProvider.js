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

  const setCurrentUser = (user) => setUser(user)

  const addUserToFirestore = (id, data, isAdmin) => {
    firebase.firestore().collection("users")
      .doc(id)
      .set({
        accountType: data.type,
        bio: '',
        company: data.company || '',
        email: data.email,
        favorites: [],
        followers: [],
        following: [],
        google: '',
        id: id,
        instagram: '',
        isAdmin: isAdmin,
        isCertified: false,
        name: data.name,
        phone: data.phone || '',
        twitter: '',
        website: ''
      })
  }

  // Compare the password and confirm password fields
  const isPasswordIdentical = (password, confirm) => {
    return confirm === password ? true : false
  }

  // test if user's email is verified
  const isEmailVerified = () => {
    return firebase.auth().currentUser.emailVerified ? true : false
  }

  const sendPasswordResetEmail = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
  }

  const updateUser = (userData) => {
    const userRef = firebase.firestore().collection("users");

    if (user) {
      userRef.doc(user.id).update(userData);
    }
  }

  const uploadImageToStorage = (image) => {
    const imageRef = firebase.storage().ref().child(`${user.id}/images/${image.name}`)

    return imageRef.put(image).then((snapshot) => {
        return snapshot.state === 'success' ? imageRef.getDownloadURL() : false
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

  useEffect(() => {
    const userRef = firebase.firestore().collection("users");
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userRef.doc(user.uid).get().then((document) => {
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
    loading,
    user,
    updateUser,
    addUserToFirestore,
    setCurrentUser,
    isPasswordIdentical,
    isEmailVerified,
    uploadImageToStorage,
    sendPasswordResetEmail,
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

