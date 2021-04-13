import React, { useState }  from 'react';
import { useAuth } from '../FirebaseAuthProvider';
import MainBar from '../Components/MainBar';
import CardList from '../Products/CardList';
import QRCode from '../Components/QRCode';
import exampleDatabase from '../static/exampleDatabase';
import {
  AppBar,
  Avatar,
  Container,
  Button,
  IconButton,
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
  const [userData, setUserData] = useState({...auth.user});

  const onChangeInput = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  const onSubmitHandler = () => {
    auth.updateUser(userData)
      .then(() => console.log("Successfully updated the user's data"))
      .catch((e) => console.log(e.message))
      .finally(() => window.location.reload(true))
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
          onChange={(e) => onChangeInput(e)}
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
          onChange={(e) => onChangeInput(e)}
        />
        <TextField 
          id="website" 
          name="website"
          label="Website"
          variant="outlined"
          defaultValue={userData.website}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
        />
        <TextField 
          id="twitter"
          name="twitter"
          label="Twitter"
          variant="outlined"
          defaultValue={userData.twitter}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
        />
        <TextField 
          id="instagram"
          name="instagram"
          label="Instagram"
          variant="outlined"
          defaultValue={userData.instagram}
          className={classes.field}
          fullWidth
          onChange={(e) => onChangeInput(e)}
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
  const [image, setImage] = useState(auth.user.picture)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleImageUpload = (event) => {
    const imageName = event.target.files[0].name

    if (event.target.files.length > 0) {
      const imageFile = URL.createObjectURL(event.target.files[0]);
      console.log(auth.user.picture)
      setImage(imageFile);

      // upload to firebase and set the user's new avatar image
      auth.uploadImageToStorage(imageFile, imageName)
    }
  }

  return (
    <div>
      <div style={{backgroundColor: '#202020'}}>
        <MainBar noLogo />
      </div>
      <Container maxWidth="xl" className={classes.container}>
        <div id="avatar-section">
          <input 
            accept="image/*" 
            hidden 
            id="photo-upload" 
            type="file" 
            onChange={(e) => handleImageUpload(e)} 
          />
          <label htmlFor="photo-upload">
            <IconButton component="span">
              <Avatar 
                className={classes.profilepic} 
                src={image}
              />
            </IconButton>
          </label>
        </div>
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


