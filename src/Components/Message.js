import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(6),
  },
  message: {
    fontFamily: 'Nunito',    
    margin: theme.spacing(2),
  },
  navlink: {
    color: theme.palette.primary.main,
    fontFamily: 'Nunito',
    textDecoration: 'none',
  },
}));

export default function Success() {
  const classes = useStyles();
  const location = useLocation();

  console.log("location: ", location);
  return (
    <div>
      <div className={classes.root}>
        <Typography className={classes.message}>
          {location.state.message} <span><NavLink to={location.state.nav} className={classes.navlink}>Go to Sign In</NavLink></span>
        </Typography>
  
      </div>
    </div>
  );
}
