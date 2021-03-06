import React from 'react';
import helpText from '../static/helpText';
import {
  Box,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  helpContainer: {
    zIndex: 2,
    minHeight: '40vh',
    position: 'fixed',
    padding: 20,
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
    <div>
    {
      step <= 3
      ? <Box 
          display="flex"
          flexWrap="wrap"
          border={1} 
          boxShadow={1}
          borderColor="primary.main" 
          bgcolor="#505050"
          borderRadius={37}
          className={classes.helpContainer}
        >
          <Typography 
            component="p" 
            color="textSecondary"
          >
            { steps() }
          </Typography>
        </Box>
      : false
    }
    </div>
  );
}
