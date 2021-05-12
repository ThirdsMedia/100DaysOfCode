import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useHistory } from 'react-router-dom';
import MainBar from '../Navigation/MainBar';
import CardList from './CardList';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {
  Link,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nav: {
    position: 'fixed',
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    margin: 20,
    borderRadius: 50,
    bottom: 0,
    right: 0,
  },
  scrollUp: {
    position: 'fixed',
    backgroundColor: 'grey',
    padding: 20,
    margin: 20,
    borderRadius: 50,
    bottom: 0,
    left: 0,
  }
}));

const FloatingNav = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div>
      <Link href="/create" color="inherit">
        <IconButton className={classes.nav}>
          <AddIcon />  
        </IconButton>
      </Link>
      <IconButton 
        className={classes.scrollUp} 
        onClick={onClick}
      >
        <ExpandLessIcon />
      </IconButton>
    </div>
  );
}

export default function Products() {
  const db = useFirebase();
  const history = useHistory();
  const [cocktailList, setCocktailList] = useState([]);

  const scrollUp = () => window.scrollTo({top: 0,  behavior: 'smooth'});

  useEffect(() => {
    const data = [];

   // if (!db.isEmailVerified()) {
   //   firebase.auth().signOut()
/*      history.push(
        "/message",
        { message: "You must verify your email before loggin in!" }
      );
      */
   // }

    firebase.firestore().collection("cocktails")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          data.push(doc.data());
        })
        setCocktailList(data);
      })
  }, [db, history]);

  return (
    <div id="theCardList">
      <MainBar />
      <CardList data={cocktailList} />
      <FloatingNav onClick={scrollUp} />
    </div>
  );
}
