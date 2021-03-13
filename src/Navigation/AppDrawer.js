import React from 'react';
import {
  Drawer,
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
        <List component='nav'>
          <Link href='/' to='/'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon /> 
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href='/profile' to='/profile'>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon /> 
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Link href='/discover' to='/disover'>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon /> 
              </ListItemIcon>
              <ListItemText primary="Discover" />
            </ListItem>
          </Link>
          <Link href='/create' to='/create'>
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
          <Link href='/signin' to='/signin'>
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
