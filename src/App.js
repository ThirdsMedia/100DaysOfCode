import React from 'react';
import Profile from './Profile';
import EditProfile from './EditProfile';
import profileData from './static/profileData';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Products from './Products';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: lightGreen[500],
			background: '#303030',
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
      <EditProfile profileData={profileData} />
		</ThemeProvider>
	)
}

