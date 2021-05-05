import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppDrawer from '../Navigation/AppDrawer';
import { useFirebase } from '../Providers/FirebaseProvider';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Button,
  Menu,
  Link,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles, makeStyles } from '@material-ui/core/styles';

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
  menu: {
    textTransform: 'none',
    fontFamily: 'Nunito',
  },
  menuGrid: {
    padding: 15,
    textAlign: 'left',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MainBar() {
  const classes = useStyles();
  const firebase = useFirebase();
  const history = useHistory();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onOpenDrawer = () => setIsOpen(!isOpen)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOutHandler = () => {
    firebase.signout()
      .catch((e) => console.log(e.message))
      .finally(() => history.push("/signin"))
  }

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
                {
                  location.pathname !== "/profile" ? 
                    <IconButton onClick={handleMenu}>
                      <Avatar /> 
                    </IconButton>
                  : false
                }
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Grid container className={classes.menuGrid}>
                    <Grid item>
                      <IconButton>
                        <Avatar />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" className={classes.menu}>
                        {firebase.user.name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Link href="/profile" color="inherit">
                    <StyledMenuItem>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />

                    </StyledMenuItem>
                  </Link>
                  <Link href="/editprofile" color="inherit">
                    <StyledMenuItem>
                      <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </StyledMenuItem>
                  </Link>
                  <Divider />
                  <div style={{margin: 10, textAlign: 'center'}}>
                    <Button 
                      className={classes.menu} 
                      color="secondary" 
                      variant="contained"
                      onClick={onSignOutHandler}
                    >
                      Log out
                    </Button>
                  </div>
                </StyledMenu>
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

