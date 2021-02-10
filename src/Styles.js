import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

/* 
 * So I didn't realize it at first, but I do seem to be having the same problem as this person did: 
 * https://stackoverflow.com/questions/56929702/material-ui-v4-makestyles-exported-from-a-single-file-doesnt-retain-the-styles
 *
 * So, I guess I should read more closely :P
 *
 * I read that simply import { useStyles } at the end of all your other imports should work, but in my case it doesn't. I'm now
 * trying the second solution in that answer from the link
 */

const useStyles = makeStyles(theme => ({
  	paper: {
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
}))

export {useStyles};
