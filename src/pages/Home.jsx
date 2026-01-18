import React, { useContext } from "react";
import { ValueContext } from "../context/ValueProvider";
function Home() {
  // const { val, setVal } = useContext(ValueContext);
  const { state, dispatch } = useContext(ValueContext);
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({
            type:'increment',
          });
        }}
      >
        Increment{" "}
      
      </button>

      <br />
      

      <button
        onClick={() => {
          // setVal(state - 1);
           dispatch({
            type:'decrement',
          });
        }}
      >
        Decrement{" "}
      </button>
    </div>
  );
}

export default Home;
