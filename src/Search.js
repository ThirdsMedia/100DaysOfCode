import React from 'react';
import ItemList from './ItemList';

const exampleData = [
  {
    name: "test",
    date: "02/02/21",
    creator: "Darth Vader",
    ingredients: {},
    instructions: "Shake for 10 seconds.",
    description: "very good",
  },
  {
    name: "south side",
    date: "02/02/21",
    creator: "Jar Jar",
    ingredients: {},
    instructions: "Shake for 10 seconds.",
    description: "very good",
  },
]

export default function Search() {
  return (
    <div className="SearchDiv">
   		<h2>Search and Items Page</h2>
    	<input 
      		className="SearchInput"
      		type="text" 
      		onChange={console.log("test")} 
    	/>
          <ItemList data={exampleData} />
	</div>
  )
}
