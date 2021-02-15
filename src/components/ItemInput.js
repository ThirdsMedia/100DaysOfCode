import React from 'react';

export default function ItemInput() {
  return (
    <div>
      <input 
        className="ItemInput"
        type="text" 
        onChange={console.log("test")} 
      />
      <input
        className="NumericInput"
        type="text"
      />
      <button className="InputButton">+</button>
    </div>
  )
}
