import React from 'react';
import ImageCard from './ImageCard';
import places from './places';
//import useWindowPosition from './useWindowPosition';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default function CallToAction() {
	const classes = useStyles();
//	const checked = useWindowPosition('header');

	return (
		<div className={classes.root}>
			<ImageCard info={places[0]} />
			<ImageCard info={places[1]} />
		</div>
	);
}
