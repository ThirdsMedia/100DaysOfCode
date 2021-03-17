import React from 'react';
import MainBar from '../Components/MainBar';
import Header from './Header';
import CallToAction from './CallToAction';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cocktail1.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
},
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainBar />
      <Header />
      <CallToAction />
    </div>
  );
}

