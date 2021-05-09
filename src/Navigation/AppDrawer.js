import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../Providers/FirebaseProvider';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Avatar,
  Drawer,
  Grid,
  IconButton,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5,
    minWidth: 200,
  },
  avatar: {
    padding: 10,
  },
  title: {
    fontFamily: 'Nunito',
  },
}));

export default function AppDrawer({ isOpen, handleDrawer }) {
  const classes = useStyles();
  const firebaseProvider = useFirebase();
  const history = useHistory();

  const onSignOutHandler = () => {
    firebase.auth().signOut().then(() => {
      firebaseProvider.setCurrentUser(false);
      history.push("/")
    })
  }

  return (
    <Drawer
      anchor='left'
      open={isOpen}
      onClose={handleDrawer}
      variant='temporary'
    >
      <div className={classes.root}>
        <Grid container className={classes.avatar}>
          <Grid item>
            <IconButton href="/profile">
              <Avatar src={firebaseProvider.user.picture} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {firebaseProvider.user.name}
            </Typography>
            <Typography variant="caption" color="textSecondary" className={classes.title}>
              {firebaseProvider.user.accountType}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <List component='nav'>
          <Link href='/' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon /> 
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href='/discover' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon /> 
              </ListItemIcon>
              <ListItemText primary="Discover" />
            </ListItem>
          </Link>
          <Link href='/create' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <LocalBarIcon /> 
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItem>
          </Link>
          {
            firebaseProvider.user.isAdmin ? 
              <Link href='/admin' color='inherit'>
                <ListItem button>
                  <ListItemIcon>
                    <LocalBarIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Management" />
                </ListItem>
              </Link>
            : false
          }
        </List>
        <Divider />
        <List component='nav'>
          <ListItem button onClick={() => onSignOutHandler()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem> 
        </List>
      </div>
    </Drawer>
  );
}
