import React from 'react',
import {
	Container,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	bio: {
		color: theme.palette.primary.main,
	},
	editProfile: {
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'Nunito',
	},
}));

function EditProfile({ profileData }) {
	const classes = useStyles();

	// This should be a different component that gets navigated to by pushing a button in Profile
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
