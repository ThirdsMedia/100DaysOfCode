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
  const [recipe, setRecipe] = useState({
    picture: '',
    ingredients: []
  });
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
    const cocktailID = uuidv4();
    const date = new Date();

    cocktailRef
      .doc(cocktailID)
      .set({
        id: cocktailID,
        ...recipe,
        timestamp: date.toGMTString(),
      })
  }

  //const navigation = { handleBack, handleNext, steps, activeStep, setActiveStep, isReadyForReview, setIsReadyForReview }
  //const form = { register, handleSubmit, errors }

  return {
    steps,
    errors,
    recipe,
    handleBack,
    handleNext,
    activeStep,
    setActiveStep,
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
