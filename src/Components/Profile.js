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
    bio: auth.user.bio,
    phone: auth.user.phone,
    email: auth.user.email,
    website: auth.user.website,
    twitter: auth.user.twitter,
    instagram: auth.user.instagram,
    picture: auth.user.picture,
    favorites: auth.user.favorites,
  })

  const onChangeName = (event) => {
    setUserData(Object.assign({}, userData, {displayName: event.target.value}))
  }

  const onChangeBio = (event) => {
    setUserData(Object.assign({}, userData, {bio: event.target.value}))
  }

  const onChangeTwitter = (event) => {
    setUserData(Object.assign({}, userData, {twitter: event.target.value}))
  }

  const onChangeWebsite = (event) => {
    setUserData(Object.assign({}, userData, {website: event.target.value}))
  }

  const onChangeInstagram = (event) => {
    setUserData(Object.assign({}, userData, {instagram: event.target.value}))
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
          onChange={(e) => onChangeName(e)}
        />
        <TextField 
          id="bio" 
          name="bio"
          label="Bio"
          variant="outlined"
          defaultValue={userData.bio}
          className={classes.field}
          fullWidth 
          multiline 
          rows={5}
          onChange={(e) => onChangeBio(e)}
        />
        <TextField 
          id="website" 
          name="website"
          label="Website"
          variant="outlined"
          defaultValue={userData.website}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeWebsite(e)}
        />
        <TextField 
          id="twitter"
          name="twitter"
          label="Twitter"
          variant="outlined"
          defaultValue={userData.twitter}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeTwitter(e)}
        />
        <TextField 
          id="instagram"
          name="instagram"
          label="Instagram"
          variant="outlined"
          defaultValue={userData.instagram}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInstagram(e)}
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

