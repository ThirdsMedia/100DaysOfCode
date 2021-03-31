import React from 'react';
import QRCodeImage from '../assets/test.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
    backgroundColor: theme.palette.primary.background
  },
	qrCode: {
		display: 'flex',
		backgroundColor: theme.palette.primary.main,
		height: 200,
		width: 200,
		borderRadius: 5,
		margin: 15,
	},
}));

export default function QRCode() {
	const classes = useStyles();

	return (
		<div className={classes.qrCode}>
			<img 
				style={{
					height: 200,
					width: 200,
					padding: 5,
				}}
				src={QRCodeImage} 
				alt="QRCode" 
			/>
		</div>
	);
}
