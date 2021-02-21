import React, { useState }  from 'react';
import MainBar from './MainBar';
import CardItem from './CardItem';
import QRCode from './QRCode';
import ProfilePic from './assets/dj-pct.jpg';
import exampleDatabase from './static/exampleDatabase';
import {
  AppBar,
  Avatar,
  Container,
  Box,
  Grid,
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
    borderRadius: 50,
    height: 37,
    width: 160,
    fontFamily: 'Nunito',
    textTransform: 'none',
  },
  navBar: {
    backgroundColor: '#202020',
    color: theme.palette.primary.main
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
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{display: 'flex', justifyContent: 'center'}} p={3}>
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
      {/* profile container */}
      <Container maxWidth="xl" className={classes.container}>
        <Avatar className={classes.profilePic} src={ProfilePic} />
        <Container className={classes.info}>
          <Typography component="h1" variant="h3" style={{fontFamily: 'Nunito'}}>
            {profileData.name}
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
        <Button variant="outlined" color="primary" className={classes.editButton}>
          Edit Profile
        </Button>
      </Container>
      <AppBar position="static" className={classes.navBar}>
        <Tabs 
          value={value}
          indicatorColor="primary"
          onChange={handleChange} 
          variant="fullWidth" 
          aria-label="simple tabs example"
        >
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="Favorites" {...a11yProps(1)} />
          <Tab label="QR Code" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Info
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4} alignItems='center'>
        {
          exampleDatabase.map((card) => {
            return (
              <Grid item>
                <CardItem card={card} />
              </Grid>
            );
          })
        }
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QRCode />       
      </TabPanel>
    </div>
  );
}

