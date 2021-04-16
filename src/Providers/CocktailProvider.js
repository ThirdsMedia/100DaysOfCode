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
  const steps = ['Basic Information', 'Base Spirit', 'Ingredients', 'Instructions'];
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } 
  }

  const buildCocktailFromInput = (event) => {
    setTheCocktailData({
      ...theCocktailData, 
      [event.target.name]: event.target.value
    });
  }

  const buildCocktailIngredient = (event, object) => {
    setTheCocktailData({...theCocktailData, [event.target.name]: object});  
  }

  /*
  const addCocktailToFirestore = () => {
  }

  const updateCocktailInFirestore = () => {
  }

  const deleteCocktail = () => {
  }
  */

  return {
    steps,
    handleBack,
    handleNext,
    activeStep,
    theCocktailData,
    buildCocktailFromInput,
//    addCocktailToFirestore,
//    updateCocktailInFirestore,
//    deleteCocktail,
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
