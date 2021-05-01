import React from 'react';
import ImageCard from './ImageCard';
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

const info = [
  {
    id: 0,
    location: "/discover",
    title: "Discover",
    desc: "Search for one of our custom cocktail recipes",
    direction: 'left',
  },
  {
    id: 1,
    location: "/create",
    title: "Create",
    desc: "Create a beautiful cocktail and add it to the collection",
    direction: 'right',
  }
];

export default function CallToAction() {
	const classes = useStyles();
	const isAnimated = useWindowPosition("header");

	return (
		<div className={classes.root} id="call-to-action">
      <ImageCard 
        info={info[0]} 
        isAnimated={isAnimated} 
        image={image1} 
      />
      <ImageCard 
        info={info[1]} 
        isAnimated={isAnimated} 
        image={image2} 
      />
		</div>
	);
}
