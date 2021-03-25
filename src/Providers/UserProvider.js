import { 
  useState, 
  useEffect,
  useContext,
  createContext 
} from 'react';
import { auth } from '../firebase';

export const UserContext = createContext({ user: null });

export const useSession = () => {
  const { user } = useContext(UserContext);
  return user;
}

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = auth.currentUser
    return {
      initializing: !user,
      user,
    }
  })

  function onChange(user) {
    setState({initializing: false, user})
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onChange)

    return () => unsubscribe()
  }, [])

  return state;
}

