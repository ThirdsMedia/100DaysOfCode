import React from 'react';
import ImageCard from './ImageCard';
import places from './places';
import useWindowPosition from './useWindowPosition';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));

export default function CallToAction() {
	const classes = useStyles();
	const isAnimated = useWindowPosition("header");

	return (
		<div className={classes.root} id="call-to-action">
			<ImageCard info={places[0]} isAnimated={isAnimated} />
			<ImageCard info={places[1]} isAnimated={isAnimated} />
		</div>
	);
}
