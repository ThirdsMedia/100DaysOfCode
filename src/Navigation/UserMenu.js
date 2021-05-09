import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../Providers/FirebaseProvider';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Grid,
  Typography,
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
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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

export default function UserMenu() {
  const classes = useStyles();
  const firebaseProvider = useFirebase();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenu}>
        <Avatar src={firebaseProvider.user.picture} /> 
      </IconButton>
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
              <Avatar src={firebaseProvider.user.picture} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.menu}>
              {firebaseProvider.user.name}
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
        <Link href="/settings" color="inherit">
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
            onClick={() => {
              firebase.auth().signOut().then(() => {
                firebaseProvider.setCurrentUser(false);
                history.push("/")
              })
            }}
          >
            Log out
          </Button>
        </div>
      </StyledMenu>
    </div>
  );
}
