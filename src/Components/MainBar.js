import React, { useState } from 'react';
import AppDrawer from '../Navigation/AppDrawer';
import { useFirebase } from '../Providers/FirebaseProvider';
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Button,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    flexGrow: 1,
    background: 'transparent',
    boxShadow: 'none',
  },
  button: {
    fontFamily: 'Nunito',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },
  },
  loginButton: {
    color: 'white',
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,    
    fontFamily: 'Nunito',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default function MainBar() {
  const classes = useStyles() 
  const firebase = useFirebase();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => setIsOpen(!isOpen)

  return (
    <div>
      <AppBar 
        position="sticky" 
        elevation={0}
        color='transparent'
      >
        <Toolbar>
          <IconButton href="/" edge="start"> 
            <Avatar src={'../assets/ThirdsMediaSmall.png'} />
          </IconButton>
          <IconButton onClick={onOpenDrawer}>
            { firebase.user ? <SortIcon /> : false }
          </IconButton>
          <div style={{flexGrow: 1}}></div>
          { 
            firebase.user ? 
              <div>
                <AppDrawer isOpen={isOpen} handleDrawer={onOpenDrawer} />
                <Avatar /> 
              </div>
            : <Toolbar>
                <Button className={classes.button} href="/about">About</Button>
                <Button className={classes.button} href="/contact">Contact Us</Button>
                <Button className={classes.button}>Training</Button>
                <Button className={classes.loginButton} href="/signin" variant="contained">Login</Button>
              </Toolbar>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

