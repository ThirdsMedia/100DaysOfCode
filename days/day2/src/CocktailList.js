import React from 'react';
import Cocktail from './Cocktail';

// The list of Cocktail Components
export default function CocktailList({ data }) {
  return (
    <div className="flex">
      {
        data.map(cocktail => {
          return <Cocktail cocktail={cocktail} />
        })
      }
    </div>
  );
}
