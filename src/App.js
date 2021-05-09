import React from 'react';
import { useFirebase } from './Providers/FirebaseProvider';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightGreen, pink } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

/* Static data */
import exampleDatabase from './static/exampleDatabase';

/* Unauthenticated */
import Start from './Auth/Start';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import ForgotPassword from './Auth/ForgotPassword';

/* Authenticated */
import Profile from './Profile/Profile';
import Settings from './Profile/Settings';
import Wizard from './CreationWizard/Wizard';
import Review from './CreationWizard/Review';
import Products from './Products/Products';
import Cocktail from './Components/Cocktail';
import Panel from './Admin/Panel';

/* Either */
import Contact from './Components/Contact';
import About from './Components/About';
import Message from './Components/Message';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[500],
      hover: lightGreen[700],
      background: '#202020',
    },
    secondary: {
      main: pink[500],
      background: '#505050',
    },
    background: {
      main: '#303030',
      secondary: '#333333',
    },
    type: 'dark',
  },
})

export default function App() {
  const firebase = useFirebase();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/message" component={Message} /> 
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        {
          firebase.user ? 
            <Switch>
              <Route path={["/", "/home"]} exact component={Products} />
              <Route path="/profile" component={Profile} />
              <Route path="/settings" component={Settings} />
              <Route path="/create" component={Wizard} />
              <Route path="/review" render={() => <Review item={exampleDatabase[0]} />} />
              <Route path="/cocktail" render={() => <Cocktail item={exampleDatabase[0]} />} />
              { firebase.user.isAdmin ? <Route path="/admin" component={Panel} /> : false }
            </Switch>
          : <Switch>
              <Route path="/" exact component={Start} />
              <Route path="/signin" component={SignIn} />
              <Route path="/register/:type" component={SignUp} />
              <Route path="/forgotpassword" component={ForgotPassword} />
            </Switch>
        }
      </Router>
    </ThemeProvider>
  )
}


