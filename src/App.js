import React from 'react';
//import SignIn from './SignIn';
//import SignUp from './SignUp';
import Search from './Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: lightGreen[500],
		},
		type: 'dark',
	},
})

export default function App() {
  return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Search />
		</ThemeProvider>
	)
}

