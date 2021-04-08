import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Firebase/FirebaseAuthProvider';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import HelpIcon from '@material-ui/icons/Help';
import EmailIcon from '@material-ui/icons/Email';
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
  const auth = useAuth();
  const history = useHistory();
  const [error, setError] = useState(auth.error);

  const onSignOutHandler = () => {
    auth.signout()
      .catch((e) => setError(e.message))
      .finally(() => history.push("/"))
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
              <Avatar />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {auth.user.displayName}
            </Typography>
            <Typography variant="caption" color="textSecondary" className={classes.title}>
              {auth.user.username}
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
          <Link href='/profile' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon /> 
              </ListItemIcon>
              <ListItemText primary="Profile" />
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
          <Link href='/about' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link href='/contact' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </Link>
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
