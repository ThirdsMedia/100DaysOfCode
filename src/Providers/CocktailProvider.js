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
  //console.log("From useCocktail: ", theCocktailData);

  const buildCocktailFromInput = (event) => {
    const { name, value } = event.currentTarget;
    setTheCocktailData({...theCocktailData, [name]: value});
    console.log("From provider: ", name, value)
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
