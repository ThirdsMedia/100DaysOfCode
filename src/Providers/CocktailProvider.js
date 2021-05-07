import React, { 
  useState,
  useContext, 
  createContext,
} from 'react';
import { useForm } from 'react-hook-form';

const CocktailContext = createContext();

export const useCocktail = () => {
  return useContext(CocktailContext);  
}

function useCocktailProvider() {
  const [recipe, setRecipe] = useState({});
  const steps = ['Cocktail Image', 'Basic Information', 'Ingredients', 'Instructions'];
  const [activeStep, setActiveStep] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

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
