import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile';
import EditProfile from './EditProfile';
import exampleDatabase from './static/exampleDatabase';
import profileData from './static/profileData';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Products from './Products';
import LandingPage from './LandingPage/LandingPage';
import ItemSheet from './ItemSheet';
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
        <Route path="/products" render={() => <Products data={exampleDatabase} />} />
        <Route path="/profile" render={() => <Profile profileData={profileData} />} />
        <Route path="/editprofile" render={() => <EditProfile profileData={profileData} />} />
        <Route path="/cocktail" render={() => <ItemSheet item={exampleDatabase[0]} />} />
      </Router>
		</ThemeProvider>
	)
}

