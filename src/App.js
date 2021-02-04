import './App.css';
import ItemList from './ItemList';

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

const SearchInput = () => {
  return (
    <div className="InputDiv">
    <input 
      className="SearchInput"
      type="text" 
      onChange={console.log("test")} 
    />
    </div>
  )
}

const ItemInput = () => {
  return (
    <div className="InputDiv">
    <input 
      className="ItemInput"
      type="text" 
      onChange={console.log("test")} 
    />
    <input
      className="NumericInput"
      type="text"
    />
    <AddItemButton />
    </div>
  )
}

const FormInput = () => {
  return (
    <div className="FormDiv">
    <p>Name</p>
    <input
      className="FormInput"
      type="text"
      onChange={console.log("test")}
    />
    <input
      className="FormInput"
      type="text"
      onChange={console.log("test")}
    />
    </div>
  )
}

const AddItemButton = () => {
    return <button className="InputButton">+</button>
}

/*
const Button2 = () => {

}

const Header = () => {
}
*/

function App() {
  return(
    <div className="App">
      <h1>App Header</h1>
        {/* This is one container for the search box plus the list it searches from */}
        <h2>Search and Items Page</h2>
        <div>
          <SearchInput />
          <ItemList data={exampleData} />
        </div>
        {/* This is an example of a page with multiple item input forms */}
        <h2>Items Input Section</h2>
        <div>
          <ItemInput />
          <ItemInput />
        </div>

        {/* This is supposed to be an example of a registration or login form */}
        <h2>Registration/Login Form</h2>
        <div className="FormDiv">
          <FormInput />
        </div>
    </div>
  );
}

export default App;

