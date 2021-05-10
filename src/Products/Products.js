import React, { useEffect } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useHistory } from 'react-router-dom';
import MainBar from '../Navigation/MainBar';
import CardList from './CardList';
import firebase from 'firebase/app';
import 'firebase/auth';
import exampleDatabase from '../static/exampleDatabase';

export default function Products() {
  const db = useFirebase();
  const history = useHistory();

  useEffect(() => {
    if (!db.isEmailVerified()) {
      firebase.auth().signOut()
      history.push(
        "/message",
        { message: "You must verify your email before loggin in!" }
      );
    }
  });

  return (
    <div>
      <MainBar />
      <CardList data={exampleDatabase} />
    </div>
  );
}
