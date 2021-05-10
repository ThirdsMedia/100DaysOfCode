import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useHistory } from 'react-router-dom';
import MainBar from '../Navigation/MainBar';
import CardList from './CardList';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default function Products() {
  const db = useFirebase();
  const history = useHistory();
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    const data = [];

    if (!db.isEmailVerified()) {
      firebase.auth().signOut()
      history.push(
        "/message",
        { message: "You must verify your email before loggin in!" }
      );
    }

    // Get all the cocktails from the database
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
    <div>
      <MainBar />
      <CardList data={cocktailList} />
    </div>
  );
}
