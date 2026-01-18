import { createContext, useReducer, useState } from "react";
export const ValueContext = createContext();
let initailState = 0;
const counterReducer =(state, action ) =>{
 
  switch(action.type) {
    case "increment" :
      {
        state = state+1 
        return state;
      }
       case "decrement" :
      {
        state = state-1 
        return state;
      }
      default:{
        return state;
      }
  }
} ;

export const ValueProvider = ({ children }) => {
  // const [val,setVal]=useState(0)   // this doesnot return fuction but 
  const [state, dispatch]  =useReducer(counterReducer, initailState);   //return function and value


  // return <ValueContext.Provider value={{val,setVal}}>
   return (
     <ValueContext.Provider value={{state,dispatch}}>
    {children}
    
    </ValueContext.Provider>
   );
};
