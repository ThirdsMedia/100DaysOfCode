import './App.css';
import CocktailList from './CocktailList';

// This is simulating a database. Eventually, this will come from firebase or a custom backend
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

/*
 * Completed Day 1. On day #2 you should figure out how to style the list better, and perhaps make each cocktail button clickable. 
 * This may mean you'll need to figure out navigation. 
 */

function App() {
  return(
    <div className="tc">
      <h1>Cocktail App</h1>
      <div>
        <CocktailList data={exampleData} />
      </div>
    </div>
  );
}

export default App;

