import React from 'react';
import MainBar from '../Components/MainBar';
import {
  Typography,
  IconButton,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/thirdstree.jpg'})`,   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  about: {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: 75,
  },
  text: {
    fontFamily: 'Nunito',
    margin: theme.spacing(3),
  },
  colorText: {
    color: theme.palette.secondary.main,
  },
  goDown: {
    fontSize: '4rem',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <MainBar />
      <Scroll to="about" smooth="true">
        <IconButton>
          <ExpandMoreIcon className={classes.goDown} />
        </IconButton>
      </Scroll>
      <div className={classes.about}>
        <Typography id="about" className={classes.text}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Typography>
      </div>
    </main>
  );
}
