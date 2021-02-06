import './App.css';
import Form from './Form';
import Search from './Search';
import ItemInput from './ItemInput';

/*
const FavoriteButton = () => {
}

const MainHeader = () => {
}

const LogoHeader = () => {
}
*/

function App() {
  return(
    <div>
      <h1>App Header</h1>
      <Search />

      <div className="InputDiv">
        <h2>Items Input Section</h2>
        <ItemInput />
        <ItemInput />
      </div>

      <Form />
    </div>
  );
}

export default App;

