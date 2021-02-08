import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubLink from './GitHubLink';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { lightGreen } from '@material-ui/core/colors';
import {
	createMuiTheme,
	ThemeProvider
} from '@material-ui/core/styles';

// theme colors
const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
		type: 'dark',
  },
}); 

export default function App() {
  return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SignUp />
			<SignIn />
		</ThemeProvider>
	)
}

