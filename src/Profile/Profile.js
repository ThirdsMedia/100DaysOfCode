import React, { useState }  from 'react';
import CardList from '../Products/CardList';
import QRCode from '../Helpers/QRCode';
import ProfilePic from '../assets/dj-pct.jpg';
import exampleDatabase from '../static/exampleDatabase';
import {
  AppBar,
  Avatar,
  Container,
  Box,
  Link,
  Typography,
  Button,
  Breadcrumbs,
  Tabs,
  Tab
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: '#202020', // ok so that color looks way better anyway
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Nunito',
    borderRadius: 15,
  },
  editButton: {
    borderRadius: 37,
    height: 37,
    width: 200,
    fontFamily: 'Nunito',
    textTransform: 'none',
  },
  navBar: {
    backgroundColor: '#202020',
    color: theme.palette.primary.main,
    borderRadius: 5,
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
  tabPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

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
        <Box className={classes.tabPanel} p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Profile({ profileData }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Container maxWidth="xl" className={classes.container}>
        <Avatar className={classes.profilePic} src={ProfilePic} />
        <Container className={classes.info}>
          <Typography component="h1" variant="h3" style={{fontFamily: 'Nunito'}}>
            {profileData.fname} {profileData.lname}
          </Typography>
          <span style={{color: '#d0d0d0'}}>{profileData.username}</span>
          <Breadcrumbs className={classes.breadcrumbs}>
            <Link rel="noopener" href={profileData.twitter} className={classes.link}>
              <TwitterIcon />
            </Link>
            <Link rel="noopener" href={profileData.instagram} className={classes.link}>
              <InstagramIcon />
            </Link>
            <Link rel="noopener" href={profileData.url} className={classes.link}>
              <LinkIcon />
            </Link>
          </Breadcrumbs>
          <Typography className={classes.bio} style={{fontFamily: 'Roboto'}}>
            {profileData.bio}
          </Typography>
        </Container>
        <Button 
          variant="outlined" 
          color="primary" 
          className={classes.editButton}
          startIcon={<EditIcon />}
          href="/editprofile"
        >
          Edit Profile
        </Button>
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
        Figure out what goes here, or just get rid of it. Maybe this is where edit profile goes
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

