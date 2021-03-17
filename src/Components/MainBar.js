import React, { useState } from 'react';
import AppDrawer from '../Navigation/AppDrawer';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,  
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  appBar: {
    flexGrow: 1,
    background: 'transparent',
    boxShadow: 'none',
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto"
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  header: {
    flexGrow: "1",
    fontFamily: "Nunito",
    color: '#fff'
  },
  colorText: {
    color: theme.palette.secondary.main,    
  },
}));

export default function MainBar({ color }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={classes.root}>
      <AppDrawer isOpen={isOpen} handleDrawer={handleDrawer} />
      <AppBar 
        position="sticky" 
        className={classes.appBar} 
        elevation={0}
        color="transparent"
      >
        <Toolbar className={classes.appBarWrapper}>
          <IconButton onClick={handleDrawer}>
            <SortIcon className={classes.icon} />
          </IconButton>
          <Typography className={classes.header} component="h1" variant="h3">
            Thirds<span className={classes.colorText}>Media</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

