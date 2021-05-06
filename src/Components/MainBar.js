import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppDrawer from '../Navigation/AppDrawer';
import ThirdsMediaLogo from './ThirdsMediaLogo';
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
  InputBase,
  FormControl,
  NativeSelect,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
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
  margin: {
    margin: theme.spacing(1),
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    fontSize: 16,
    padding: '8px 24px 8px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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

function UserMenu() {
  const classes = useStyles();
  const firebase = useFirebase();
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
        <Avatar /> 
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
            onClick={() => {
              firebase.signout()
                .catch((e) => console.log(e.message))                
                .finally(() => history.push("/signin"));
            }}
          >
            Log out
          </Button>
        </div>
      </StyledMenu>
    </div>
  );
}

function SearchInput() {
  const classes = useStyles();
  const [filter, setFilter] = useState('name');

  const spirits = [
    "Bourbon",
    "Whiskey",
    "Scotch",
    "Brandy",
    "Cognac",
    "Rum",
    "Tequila",
    "Gin",
    "Vodka",
    "Absinthe",
    "Vermouth",
  ];

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      </Grid>
      <Grid item>
      <FormControl className={classes.margin}>
        <NativeSelect
          id="demo-customized-select-native"
          value={filter}
 //         onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      </Grid>
    </Grid>
  );
}

export default function MainBar() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => setIsOpen(!isOpen)

  return (
    <AppBar 
      position="sticky" 
      color="inherit"
    >
      <Toolbar>
        <ThirdsMediaLogo />
        <IconButton onClick={onOpenDrawer}>
          <SortIcon />
        </IconButton>
        <div style={{flexGrow: 1}}></div>
        <SearchInput />

        <AppDrawer isOpen={isOpen} handleDrawer={onOpenDrawer} />
        <UserMenu /> 
      </Toolbar>
    </AppBar>
  );
}

