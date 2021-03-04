import React from 'react';
import helpText from '../static/helpText';
import {
  Container,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  helpContainer: {
    backgroundColor: 'rgba(0,0,0,2)',
    zIndex: 1,
    minHeight: '80vh',
    position: 'fixed',
    borderRadius: 37,
  },
  helpText: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
}));

export default function Help({ step }) {
  const classes = useStyles();

  const steps = () => {
    switch (step) {
      case 0:
        return helpText[0]
      case 1:
        return helpText[1]
      case 2:
        return helpText[2]
      case 3:
        return helpText[3]
      default:
        return false
    }
  }

  return (
    <Container maxWidth="lg" className={classes.helpContainer}>
      <Typography 
        component="p" 
        className={classes.helpText} 
        color="textSecondary"
      >
        { steps() }
      </Typography>
    </Container>
  );
}
