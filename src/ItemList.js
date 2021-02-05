import React from 'react';
import Item from './Item';

// The list of Item Components
export default function ItemList({ data }) {
  return (
    <div className="ItemList">
      {
        data.map(item => {
          return <Item item={item} />
        })
      }
    </div>
  );
}
