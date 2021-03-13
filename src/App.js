import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile/Profile';
import EditProfile from './Profile/EditProfile';
import exampleDatabase from './static/exampleDatabase';
import profileData from './static/profileData';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Wizard from './CreationWizard/Wizard';
import Products from './Products/Products';
import LandingPage from './LandingPage/LandingPage';
import ItemSheet from './Helpers/ItemSheet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: lightGreen[500],
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
  return (
		<ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={Wizard} />
        <Route path="/discover" render={() => <Products data={exampleDatabase} />} />
        <Route path="/profile" render={() => <Profile profileData={profileData} />} />
        <Route path="/editprofile" render={() => <EditProfile profileData={profileData} />} />
        <Route path="/cocktail" render={() => <ItemSheet item={exampleDatabase[0]} isPreview />} />
      </Router>
		</ThemeProvider>
	)
}

