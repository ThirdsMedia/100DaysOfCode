import React from 'react';
import Header from './Header';
import CallToAction from './CallToAction';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/darkroad.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
},
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <CallToAction />
    </div>
  );
}

export default App;
 
