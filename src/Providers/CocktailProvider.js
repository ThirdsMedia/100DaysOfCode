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
  const steps = ['Basic Information', 'Ingredients', 'Instructions'];
  const [activeStep, setActiveStep] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formError, setFormError] = useState(null);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    if (formError) {
      return formError
    } else {
      if (activeStep < steps.length) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      } 
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
    recipe,
    handleBack,
    handleNext,
    activeStep,
    buildFromInput, 
    addIngredients, 
    register,
    handleSubmit,
    errors,
    formError,
    setFormError,
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
