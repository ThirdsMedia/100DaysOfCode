import React, { useEffect } from 'react';
import { useFirebase } from '../Providers/FirebaseProvider';
import { useHistory } from 'react-router-dom';
import MainBar from '../Navigation/MainBar';
import CardList from './CardList';
import exampleDatabase from '../static/exampleDatabase';

export default function Products() {
  const firebaseProvider = useFirebase();
  const history = useHistory();

  useEffect(() => {
    if (!firebaseProvider.checkIsEmailVerified()) {
      firebaseProvider.signout();
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
