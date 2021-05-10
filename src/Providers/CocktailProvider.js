import React, { 
  useState,
  useContext, 
  createContext,
} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const CocktailContext = createContext();

export const useCocktail = () => {
  return useContext(CocktailContext);  
}

function useCocktailProvider() {
  const [recipe, setRecipe] = useState({});
  const steps = ['Cocktail Image', 'Basic Information', 'Ingredients', 'Instructions'];
  const [activeStep, setActiveStep] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isReadyForReview, setIsReadyForReview] = useState(false);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } 
  }

  const buildFromInput = (data) => {
    setRecipe({...recipe, ...data})
  }

  const addIngredients = (array) => {
    setRecipe({
      ...recipe,
      ingredients: array
    })
  }

  const submitToFirestore = () => {
    const cocktailRef = firebase.firestore().collection("cocktails");

    cocktailRef
      .doc(recipe.id)
      .set({
        id: recipe.id,
        ...recipe
      })
      .then(() => console.log("Sucessfully submitted: ", recipe));
  }

  return {
    steps,
    errors,
    recipe,
    handleBack,
    handleNext,
    activeStep,
    buildFromInput, 
    addIngredients, 
    register,
    handleSubmit,
    submitToFirestore,
    isReadyForReview,
    setIsReadyForReview,
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
