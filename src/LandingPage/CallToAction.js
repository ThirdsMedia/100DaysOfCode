import React from 'react';
import ImageCard from './ImageCard';
import homeNav from '../static/homeNav';
import useWindowPosition from './useWindowPosition';
import { makeStyles } from '@material-ui/core/styles';
import image1 from '../assets/discover.jpeg';
import image2 from '../assets/create.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
	},
}));

export default function CallToAction() {
	const classes = useStyles();
	const isAnimated = useWindowPosition("header");

	return (
		<div className={classes.root} id="call-to-action">
      <ImageCard 
        info={homeNav[0]} 
        isAnimated={isAnimated} 
        image={image1} 
      />
      <ImageCard 
        info={homeNav[1]} 
        isAnimated={isAnimated} 
        image={image2} 
      />
		</div>
	);
}
