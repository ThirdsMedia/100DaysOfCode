import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

/* 
 * Upon starting day seven, delete all this below before you start the video
 * Then code it once you start the video, so you can see how this should be done
 * Don't forget to replace the <div> block in App() with <ThemeProvider theme={thene}>
 *
 
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
*/



export default function App() {
  return (
		<div>
			<SignIn />
			<SignUp />
		</div>
	)
}

