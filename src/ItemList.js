import React from 'react';
import Item from './Item';

// The list of Item Components
export default function ItemList({ data }) {
  return (
    <div className="flex">
      {
        data.map(item => {
          return <Item item={item} />
        })
      }
    </div>
  );
}
