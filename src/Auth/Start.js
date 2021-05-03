import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Link,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  card: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
  },
  root: {
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
}));


function NavCard({title, navigate}) {
  const classes = useStyles();

  // So you need to 
  return (
    <Link style={{ textDecoration: 'none' }} onClick={navigate}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
  //          image={image}
            title="Navigate"
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="h1" 
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
              {"Description"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default function Start() {
  const classes = useStyles();
  const history = useHistory();

  const onNavigate = (location) => {
    history.push({
      pathname: "/signup",
      formType: location,
    });
//    console.log(location);
  }

  return (
    <div>
    <Typography>
      Are you signing in as
    </Typography>
      <div className={classes.card}>
        <NavCard title={"Customer"} navigate={() => onNavigate("/customer")} />
        <NavCard title={"Business"} navigate={() => onNavigate("/business")} />
      </div>
    </div>
  );
}
