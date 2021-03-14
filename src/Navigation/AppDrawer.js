import React from 'react';
import profileData from '../static/profileData';
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
              <Avatar src={profileData.picture} />  
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {profileData.fname+' '}
              {profileData.lname}
            </Typography>
            <Typography variant="caption" color="textSecondary" className={classes.title}>
              {profileData.username}
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
        </List>
        <Divider />
        <List component='nav'>
          <Link href='/signin' color='inherit'>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem> 
          </Link>
        </List>
      </div>
    </Drawer>
  );
}
