import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

/* Figure out how to pass this down to the rest of the app without using makeStyles in individual files */
const theme = createMuiTheme({
	palette: {
		primary: {
			main: lightGreen[500],
		},
		type: 'dark',
	},
/*  	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(6),
	},
	textField: {
		padding: 10,
	},
	submitButton: {
		color: 'white',
		margin: theme.spacing(5),
		fontWeight: 'bold',
		borderRadius: 50,
		backgroundColor: lightGreen[500],
		'&:hover': {
			backgroundColor: lightGreen[700],
		},
  	},
*/
})

export default function App() {
  return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SignUp />
			<SignIn />
		</ThemeProvider>
	)
}

