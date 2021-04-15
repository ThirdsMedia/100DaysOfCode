import React, { 
  useState,
  useContext, 
  useEffect,
  createContext,
} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CocktailContext = createContext();

export const useCocktail = () => {
  return useContext(CocktailContext);  
}


function useCocktailProvider() {
  const [theCocktailData, setTheCocktailData] = useState({});
  const [cocktailIngredients, setCocktailIngredients] = useState([]);

  const buildCocktailFromInput = (event) => {
//    const { name, value } = event.currentTarget;
    setTheCocktailData({...theCocktailData, [event.target.name]: event.target.value});
 //   console.log(event.target.name, event.target.value)
  }

  const buildCocktailIngredient = (name, object) => {
    setTheCocktailData({...theCocktailData, [name]: object});  
  }

  const addCocktailToFirestore = () => {
  }

  const updateCocktailInFirestore = () => {
  }

  const deleteCocktail = () => {
  }

  return {
    theCocktailData,
    buildCocktailFromInput,
    addCocktailToFirestore,
    updateCocktailInFirestore,
    deleteCocktail,
  }
}

export function CocktailProvider({ children }) {
  const cocktail = useCocktailProvider();

  return (
    <CocktailContext.Provider value={cocktail}>
      {children}
    </CocktailContext.Provider>
  );
}
