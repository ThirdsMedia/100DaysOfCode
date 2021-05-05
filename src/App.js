import React from 'react';
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
import { useFirebase } from './Providers/FirebaseProvider';

/* Authenticated */
import Profile from './Profile/Profile';
import Wizard from './CreationWizard/Wizard';
import Review from './CreationWizard/Review';
import Products from './Products/Products';
import Cocktail from './Components/Cocktail';

/* Either */
import Contact from './Components/Contact';
import About from './Components/About';
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
          <Route path="/success" component={Success} /> 
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        {
          firebase.user ? 
            <Switch>
              <Route path="/" exact render={() => <Products data={exampleDatabase} />} />
              <Route path="/profile" component={Profile} />
              <Route path="/create" component={Wizard} />
              <Route path="/review" render={() => <Review item={exampleDatabase[0]} />} />
              <Route path="/cocktail" render={() => <Cocktail item={exampleDatabase[0]} />} />
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


