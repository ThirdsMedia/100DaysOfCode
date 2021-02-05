import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

// The individual data object component
export default function Item({ item }) {
  return (
    <div className="Item">
      <FontAwesomeIcon icon={faCocktail} />
      <div>{item.name}</div>
    </div>
  );
}
