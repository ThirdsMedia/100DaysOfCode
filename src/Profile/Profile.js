import React, { useState, useLayoutEffect }  from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import MainBar from '../Navigation/MainBar';
import QRCode from '../Components/QRCode';
import CardList from '../Products/CardList';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {
  AppBar,
  Avatar, 
  Container,
  Box,
  Link,
  Typography,
  Breadcrumbs,
  Tabs,
  Tab,
  Button,
  Divider,
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
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
  breadcrumbs: {
    fontFamily: 'Nunito',
    margin: 20
  },
  link: {
    display: 'flex',
    color: theme.palette.secondary.main
  },
  button: {
    marginLeft: theme.spacing(8),
    textTransform: 'none',
    fontFamily: 'Nunito',
  },
  profilePic: {
    height: theme.spacing(26),
    width: theme.spacing(26),
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

/*
 * Firebase Auth API Reference 
 * https://firebase.google.com/docs/reference/js/firebase.User
 */

export default function Profile() {
  const classes = useStyles();
  const db = useFirebase();
  const [tabNum, setTabNum] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [creations, setCreations] = useState([]);

  useLayoutEffect(() => {
    const favs = [];
    const creates = [];
    const cocktailRef = firebase.firestore().collection("cocktails");

    // get all favorited cocktails
    db.user.favorites.forEach(favorite => {
      cocktailRef.doc(favorite.id).get().then((doc) => {
        favs.push(doc.data());
      });
      setFavorites(favs);
    });

    // Get all cocktails created by you
    cocktailRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().userID === db.user.id) {
          creates.push(doc.data());
        } 
      });
      setCreations(creates);
    });
  }, [db]);

  const handleTabChange = (event, newValue) => setTabNum(newValue)

  return (
    <div>
    <MainBar />
    <Container>
      <Container maxWidth="xl" className={classes.container}>
        <Avatar src={db.user.picture} className={classes.profilePic}/>
        <Container className={classes.info}>
          <Typography component="h1" variant="h3" style={{fontFamily: 'Nunito'}}>
            {db.user.name} <Button variant="outlined" color="primary" href="/settings" className={classes.button}>Edit Profile</Button>
          </Typography>
          <span style={{color: '#d0d0d0'}}>{db.user.accountType}</span>
          <span style={{color: '#d0d0d0'}}>{db.user.followers.length} Followers - {db.user.following.length} Following</span>
          <Breadcrumbs className={classes.breadcrumbs}>
            <Link rel="noopener" href={db.user.twitter} className={classes.link}>
              <TwitterIcon />
            </Link>
            <Link rel="noopener" href={db.user.instagram} className={classes.link}>
              <InstagramIcon />
            </Link>
            <Link rel="noopener" href={db.user.website} className={classes.link}>
              <LinkIcon />
            </Link>
          </Breadcrumbs>
          <Divider />
          <Typography className={classes.bio}>
            {db.user.bio}
          </Typography>
        </Container>
        <QRCode />       
      </Container>
      <AppBar position="static" className={classes.navBar}>
        <Tabs 
          value={tabNum}
          indicatorColor="primary"
          onChange={handleTabChange} 
          variant="fullWidth" 
          aria-label="simple tabs example"
        >
          <Tab disableRipple label="My Creations" {...a11yProps(1)} />
          <Tab disableRipple label="Favorites" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabNum} index={0}>
        <CardList data={creations} />
      </TabPanel>
      <TabPanel value={tabNum} index={1}>
        <CardList data={favorites} />
      </TabPanel>
    </Container>
    </div>
  );
}
