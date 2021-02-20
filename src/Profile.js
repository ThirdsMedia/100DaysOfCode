import React from 'react';
import MainBar from './MainBar';
import QRCode from './QRCode';
import {
	Avatar,
	Container,
	Box,
	Typography,
	Button,
} from '@material-ui/core';
import ProfilePic from './assets/dj-pct.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		padding: 20,
		width: '100%',
		backgroundColor: '#202020', // ok so that color looks way better anyway
	},
	container2: {
		display: 'flex',
		justifyContent: 'center',
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'Nunito',
		margin: 25,
		backgroundColor: '#303030', // this is just for testing purposes
		borderRadius: 15,
	},
	title: {
		fontFamily: 'Nunito',
	},
	profileText: {
		color: theme.palette.primary.main,
		fontFamily: 'Nunito',
		marginBottom: 25,
	},
	editButton: {
		borderRadius: 50,
		height: 37,
		width: 160,
		fontFamily: 'Nunito',
		textTransform: 'none',
	},
	profilePic: {
		height: theme.spacing(26),
		width: theme.spacing(26),
	},
}));

// Alright that's it for now. Gotta work a 16 hour shift in 7 hours

export default function Profile({ profileData }) {
	const classes = useStyles();

	return (
		<main>
			<div className={classes.container}>
				<Avatar className={classes.profilePic} src={ProfilePic} />
				<Container className={classes.info}>
					<Typography component="h1" variant="h3" className={classes.title}>
						{profileData.name}
					</Typography>
					<Typography component="subtitle1" className={classes.profileText}>
						{profileData.occupation}
					</Typography>
					{profileData.bio}
				</Container>
				<Button variant="outlined" color="primary" className={classes.editButton}>
					Edit Profile
				</Button>
			</div>
			<Container component="main" className={classes.container2}>
				<QRCode />
			</Container>
		</main>
	);
}
