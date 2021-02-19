import React from 'react';
import Profile from './Profile';
import profileData from './static/profileData';
//import SignIn from './SignIn';
//import SignUp from './SignUp';
//import ProductList from './ProductList';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: lightGreen[500],
			background: '#303030',
		},
		secondary: {
			main: '#696969'			
		},
		type: 'dark',
	},
})

export default function App() {
  return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Profile profileData={profileData} />
		</ThemeProvider>
	)
}

