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

function App() {
  return (
    <div className="tc">
      <h1>Cocktail App</h1>
      <div>
        <CocktailList data={exampleData} />
      </div>
    </div>
  );
}

export default App;

