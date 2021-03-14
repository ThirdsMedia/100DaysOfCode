import React from 'react';
import helpText from '../static/helpText';
import {
  Drawer,
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    maxWidth: 500,
  },
}));

export default function InfoDrawer({ step, isOpen, handleDrawer }) {
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
    <Drawer
      anchor='right'
      open={isOpen}
      onClose={handleDrawer}
      variant='persistent'
    >
      <Box className={classes.root}>
      {
        step <= 3
        ? 
          <Typography 
            align="center"
            component="body1" 
            color="textSecondary"
            noWrap
          >
            { steps() }
          </Typography>
        : false
      }
      </Box>
    </Drawer>
  );
}
