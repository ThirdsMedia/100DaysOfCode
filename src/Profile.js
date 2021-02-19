import React from 'react';
import MainBar from './MainBar';
import ProfilePic from './assets/dj-pct.jpg';
import {
	Grid,
	Avatar,
	Container,
	Typography,
} from '@material-ui/core';
import CropFreeIcon from '@material-ui/icons/CropFree';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		margin: 25,
		padding: 20,
		borderRadius: 25,
		backgroundColor: theme.palette.secondary.main,
	},
	profileMain: {
		display: 'flex',
		flexDirection: 'column',
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'Nunito',
		margin: 25
	},
	bio: {
		color: theme.palette.primary.main,
	},
	editProfile: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'Nunito',
	},
	profilePic: {
		height: theme.spacing(26),
		width: theme.spacing(26),
	},
}));

function EditProfile({ profileData }) {
	const classes = useStyles();

	return (
		<Container>
			<Grid container className={classes.editProfile}>
				<Grid item>
					Name: {profileData.name}
				</Grid>
				<Grid item>
					Occuption: {profileData.occupation}
				</Grid>
				<Grid item>
					Employer: {profileData.employer}
				</Grid>
				<Grid item className={classes.bio}>
					{profileData.bio}
				</Grid>
			</Grid>
		</Container>
	);
}

// Alright time for a break
export default function Profile({ profileData }) {
	const classes = useStyles();

	return (
		<main>
			<div className={classes.container}>
				<Avatar className={classes.profilePic} src={ProfilePic} />
				<Container className={classes.profileMain}>
					<Typography component="h1" variant="h3" className={classes.info}>
						{profileData.name}
					</Typography>
					<CropFreeIcon fontSize="large"/>
				</Container>
			</div>
			<EditProfile profileData={profileData} />
		</main>
	);
}
