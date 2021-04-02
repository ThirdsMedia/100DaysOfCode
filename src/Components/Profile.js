import React, { useState }  from 'react';
import { useAuth } from '../FirebaseAuthProvider';
import { useHistory } from 'react-router-dom';
import MainBar from './MainBar';
import CardList from '../Products/CardList';
import QRCode from './QRCode';
import ProfilePic from '../assets/dj-pct.jpg';
import exampleDatabase from '../static/exampleDatabase';
import {
  AppBar,
  Avatar,
  Container,
  Button,
  TextField,
  Grid,
  Box,
  Link,
  Typography,
  Breadcrumbs,
  Tabs,
  Tab
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: theme.palette.primary.background
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Nunito',
    borderRadius: 15,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
  },
  field: {
    marginBottom: 15,
    backgroundColor: theme.palette.primary.background
  },
  button: {
    borderRadius: 37
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  navBar: {
    backgroundColor: theme.palette.primary.background,
    color: theme.palette.primary.main,
    borderRadius: 5,
  },
  bio: {
    fontFamily: 'Roboto',
  },
  profilePic: {
    height: theme.spacing(26),
    width: theme.spacing(26),
  },
  breadcrumbs: {
    fontFamily: 'Nunito',
    margin: 20
  },
  link: {
    display: 'flex',
    color: theme.palette.secondary.main
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.nav} p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function EditProfile({ auth }) {
  const classes = useStyles(); 
  const history = useHistory();
  const [userData, setUserData] = useState({
    id: auth.user.id,
    displayName: auth.user.displayName,
    phone: auth.user.phone,
    email: auth.user.email,
    website: auth.user.website,
    twitter: auth.user.twitter,
    instagram: auth.user.instagram,
    picture: auth.user.picture,
    favorites: auth.user.favorites,
  })

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget    

    // switch statement logic makes things weird. If I get rid of all fields besides displayName then it works to update
    // the displayName, but if I uncomment the below lines, nothing works. Hmmmm
    //  
    // Can confirm, any of the fields work, but only if they are the only one uncommented. May have to split into multiple
    // event handlers
    switch(name) {
//      case "displayName":
 //       setUserData(Object.assign({}, userData, {displayName: value}))
      case "bio":
        setUserData(Object.assign({}, userData, {bio: value}))
        /*
      case "twitter":
        setUserData(Object.assign({}, userData, {twitter: value}))
      case "instagram":
        setUserData(Object.assign({}, userData, {instagram: value}))
      case "website":
        setUserData(Object.assign({}, userData, {website: value}))
        */
      default:
        return false
    }
  }

  const onSubmitHandler = () => {
    auth.updateUser(userData)
    history.push("/profile");
  }

  return (
    <div className={classes.form}>
      <form>
        <TextField 
          id="displayName"
          name="displayName"
          label="Name"
          variant="outlined"
          defaultValue={userData.displayName}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeHandler(e)}
        />
        <TextField 
          id="bio" 
          name="bio"
          label="Bio"
          variant="outlined"
          defaultValue={auth.user.bio} 
          className={classes.field}
          fullWidth 
          multiline 
          rows={5}
          onChange={(e) => onChangeHandler(e)}
        />
        <TextField 
          id="website" 
          name="website"
          label="Website"
          variant="outlined"
          defaultValue={auth.user.url} 
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeHandler(e)}
        />
        <TextField 
          id="twitter"
          name="twitter"
          label="Twitter"
          variant="outlined"
          defaultValue={auth.user.twitter} 
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeHandler(e)}
        />
        <TextField 
          id="instagram"
          name="instagram"
          label="Instagram"
          variant="outlined"
          defaultValue={auth.user.instagram} 
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeHandler(e)}
        />
      </form>
      <Grid container justify="center">
        <Grid item xs={2}>
          <Button 
            color="primary" 
            variant="outlined"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={onSubmitHandler}
          >
            Update Profile
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button 
            color="secondary" 
            variant="outlined"
            className={classes.button}
            startIcon={<DeleteIcon />}
            href="/profile"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

/*
 * Firebase Auth API Reference 
 * https://firebase.google.com/docs/reference/js/firebase.User
 */

export default function Profile() {
  const classes = useStyles();
  const auth = useAuth();
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <div style={{backgroundColor: '#202020'}}>
        <MainBar noLogo />
      </div>
      <Container maxWidth="xl" className={classes.container}>
        <Avatar className={classes.profilePic} src={ProfilePic} />
        <Container className={classes.info}>
          <Typography component="h1" variant="h3" style={{fontFamily: 'Nunito'}}>
            {auth.user.displayName}
          </Typography>
          <span style={{color: '#d0d0d0'}}>{auth.user.username}</span>
          <Breadcrumbs className={classes.breadcrumbs}>
            <Link rel="noopener" href={auth.user.twitter} className={classes.link}>
              <TwitterIcon />
            </Link>
            <Link rel="noopener" href={auth.user.instagram} className={classes.link}>
              <InstagramIcon />
            </Link>
            <Link rel="noopener" href={auth.user.url} className={classes.link}>
              <LinkIcon />
            </Link>
          </Breadcrumbs>
          <Typography className={classes.bio}>
            {auth.user.bio}
          </Typography>
        </Container>
      </Container>
      <AppBar position="sticky" className={classes.navBar}>
        <Tabs 
          value={value}
          indicatorColor="primary"
          onChange={handleChange} 
          variant="fullWidth" 
          aria-label="simple tabs example"
        >
          <Tab disableRipple label="Info" {...a11yProps(0)} />
          <Tab disableRipple label="Favorites" {...a11yProps(1)} />
          <Tab disableRipple label="QR Code" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EditProfile auth={auth} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardList data={exampleDatabase} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QRCode />       
      </TabPanel>
    </div>
  );
}

