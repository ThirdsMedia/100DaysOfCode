import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen, pink } from '@material-ui/core/colors';

/* Static data */
import exampleDatabase from './static/exampleDatabase';
import profileData from './static/profileData';

/* Auth */
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import ForgotPassword from './Auth/ForgotPassword';
//import UserProvider from './Providers/UserProvider';

/* App */
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Wizard from './CreationWizard/Wizard';
import Products from './Products/Products';
import LandingPage from './LandingPage/LandingPage';
import Cocktail from './Components/Cocktail';
import Review from './Components/Review';

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
  const user = null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {
        user ?
          <Router>
            <Route path="/" exact component={LandingPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/create" component={Wizard} />
            <Route path="/about" component={About} />
            <Route path="/review" render={() => <Review item={exampleDatabase[0]} />} />
            <Route path="/discover" render={() => <Products data={exampleDatabase} />} />
            <Route path="/profile" render={() => <Profile profileData={profileData} />} />
            <Route path="/editprofile" render={() => <EditProfile profileData={profileData} />} />
            <Route path="/cocktail" render={() => <Cocktail item={exampleDatabase[0]} />} />
          </Router>
        :
          <Router>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpassword" component={ForgotPassword} />
          </Router>
      }
    </ThemeProvider>
  )
}


