import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightGreen, pink } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

/* Static data */
import exampleDatabase from './static/exampleDatabase';

/* Auth */
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import ForgotPassword from './Auth/ForgotPassword';
import { useFirebase } from './Providers/FirebaseProvider';

/* App */
import Profile from './Profile/Profile';
import Contact from './Components/Contact';
import About from './Components/About';
import Wizard from './CreationWizard/Wizard';
import Products from './Products/Products';
import LandingPage from './LandingPage/LandingPage';
import Cocktail from './Components/Cocktail';
import Review from './Components/Review';
import Success from './Components/Success';

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
    },
    type: 'dark',
  },
})

export default function App() {
  const firebase = useFirebase();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        firebase.user ?
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/profile" component={Profile} />
              <Route path="/contact" component={Contact} />
              <Route path="/create" component={Wizard} />
              <Route path="/about" component={About} />
              <Route path="/success" component={Success} />
              <Route path="/review" render={() => <Review item={exampleDatabase[0]} />} />
              <Route path="/discover" render={() => <Products data={exampleDatabase} />} />
              <Route path="/cocktail" render={() => <Cocktail item={exampleDatabase[0]} />} />
            </Switch>
          </Router>
        :
          <Router>
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgotpassword" component={ForgotPassword} />
              <Route path="/success" component={Success} />
            </Switch>
          </Router>
      }
    </ThemeProvider>
  )
}


