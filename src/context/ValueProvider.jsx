import { createContext, useEffect, useReducer } from "react";

export const ValueContext = createContext();

const getCount = () => {
  let counts = localStorage.getItem("countItem");
  if (counts && counts !== "undefined") {
    return JSON.parse(counts);
  }
  return 0;
};

const initialState = {
  countItems: getCount(),
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, countItems: state.countItems + 1 };

    case "decrement":
      return { ...state, countItems: state.countItems - 1 };

    case "reset":
      return { ...state, countItems: 0 };

    case "5more":
      return { ...state, countItems: state.countItems + 5 };

    case "5minus":
      return { ...state, countItems: state.countItems - 5 };

   
    
    case "change":
    case "plus":
      return { ...state, countItems: state.countItems + action.payload };

    case "minus":
      return { ...state, countItems: state.countItems - action.payload };

    case "multiply":
     
      return { 
        ...state, 
        countItems: state.countItems === 0 ? action.payload : state.countItems * action.payload 
      };

    case "divide":
      
      if (action.payload === 0) return state; 
      if (state.countItems === 0) return { ...state, countItems: action.payload };
      return { ...state, countItems: state.countItems / action.payload };

    default:
      return state;
  }
};

export const ValueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    localStorage.setItem("countItem", JSON.stringify(state.countItems));
  }, [state.countItems]);

  return (
    <ValueContext.Provider value={{ state, dispatch }}>
      {children}
    </ValueContext.Provider>
  );
};