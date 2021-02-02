import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

// The individual cocktail object component
export default function Cocktail({ cocktail }) {
  return (
    <div className="ba pa2 ma2">
      <FontAwesomeIcon icon={faCocktail} />
      <div>{cocktail.name}</div>
    </div>
  );
}
