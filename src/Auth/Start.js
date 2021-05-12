import React, { useState, useEffect } from 'react';
import StartPageBar from '../Navigation/StartPageBar';
import { useHistory } from 'react-router-dom';
import useWindowPosition from './useWindowPosition';
import {
  Link,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Collapse,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageIcon from '@material-ui/icons/Message';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cocktail1.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  action: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
  },
  list: {
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  subheader: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  title: {
    flexGrow: "1",
    fontFamily: "Nunito",
    color: '#fff',
    fontSize: '4.5rem'
  },
  colorText: {
    color: theme.palette.primary.main
  },
  goDown: {
    color: theme.palette.primary.main,
    fontSize: '4rem',
  },
  nav: {
    position: 'fixed',
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    margin: 20,
    borderRadius: 50,
    bottom: 0,
    right: 0,
  },
}));


function NavCard({title, navigate}) {
  const classes = useStyles();
  const isAnimated = useWindowPosition("header");

  return (
    <Collapse appear in={isAnimated} {
      ...isAnimated ? { timeout: 1000 } : {}
    }>
      <Link style={{ textDecoration: 'none' }} onClick={navigate}>
        <Card className={classes.list}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              title="Navigate"
            />
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="h1" 
                className={classes.subheader}
              >
                {title}
              </Typography>
              <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                className={classes.paragraph}
              >
                {"Description"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Collapse>
  );
}

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Link href="/contact" color="inherit">
      <IconButton className={classes.nav}>
        <MessageIcon />  
      </IconButton>
    </Link>
  );
}

export default function Start() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true)
  }, []);

  const onNavigate = (type) => {
    history.push(`register/${type}`);
  }

  return (
    <main className={classes.main}>
      <StartPageBar />
      <div className={classes.header} id="header">
        <Collapse appear in={checked} { 
          ... checked ? { timeout: 1000 } : {}
        }>
          <Typography className={classes.title} component="h1" variant="h2">
            Welcome to<br/>
            The <span className={classes.colorText}>JADE </span>Family
          </Typography>
          <Scroll to="signUpNav" smooth="true">
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </Collapse>
      </div>
      <div id='signUpNav'>
        <Typography>
          Are you signing in as
        </Typography>
        <div className={classes.action}>
          <NavCard title={"Customer"} navigate={() => onNavigate("Customer")} />
          <NavCard title={"Mixologist"} navigate={() => onNavigate("Mixologist")} />
          <NavCard title={"Business"} navigate={() => onNavigate("Business")} />
        </div>
      </div>
      <ContactUs />
    </main>
  );
}
