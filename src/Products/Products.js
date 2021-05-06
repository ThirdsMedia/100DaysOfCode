import React from 'react';
import MainBar from '../Components/MainBar';
import CardList from './CardList';
import exampleDatabase from '../static/exampleDatabase';

export default function Products() {
  return (
    <div>
      <MainBar />
      <CardList data={exampleDatabase} />
    </div>
  );
}
