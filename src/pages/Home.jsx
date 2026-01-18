import React, { useContext, useState } from "react";
import { ValueContext } from "../context/ValueProvider";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [operator, setOperator] = useState(null);
  const { state, dispatch } = useContext(ValueContext);

  const handleDigitClick = (num) => {
    setInputValue((prev) => prev.toString() + num);
  };

  const handleOperatorClick = (op) => {
    // If we have a number in the input, move it to the global count first
    if (inputValue !== "") {
      dispatch({ type: "change", payload: Number(inputValue) });
      setInputValue("");
    }
    setOperator(op);
  };

  const handleEqual = () => {
    if (inputValue === "" || !operator) return;
    dispatch({ type: operator, payload: Number(inputValue) });
    setInputValue("");
    setOperator(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-black w-full max-w-[350px] rounded-[2.5rem] p-6 shadow-2xl">
        
    
        <div className="h-44 flex flex-col justify-end text-right px-4 mb-6 bg-zinc-900/50 rounded-2xl p-4">
         
          <div className="text-orange-500 text-xl font-medium h-8">
            {operator ? `${state.countItems} ${operator === 'plus' ? '+' : operator === 'minus' ? '-' : operator === 'multiply' ? '×' : '÷'}` : ""}
          </div>
          <input
            type="number"
            placeholder="Enter a number"
            value={inputValue || (operator ? "" : state.countItems) || ""}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleEqual();
            }}
            className=" bg-transparent text-amber-300 text-5xl font-light text-right w-full outline-none -700 placeholder:text-2xl placeholder:text-blue-900 placeholder:font-semibold "
          />
         
          {/* <div className="text-white text-6xl font-light tracking-tighter truncate">
            {inputValue || state.countItems || "0"}
          </div> */}
        </div>

        {/* BUTTONS GRID */}
        <div className="grid grid-cols-4 gap-3">
          
          <button onClick={() => {setInputValue(""); setOperator(null); dispatch({type: 'reset'})}} className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold py-4 rounded-full transition-all active:scale-90">AC</button>
          <button 
  onClick={() => {
    if (inputValue !== "") {
      // If user typed '5', make it '6'
      setInputValue(Number(inputValue) + 1);
    } else {
      // If input is empty, add to the Global Total
      dispatch({ type: 'increment' });
    }
  }} 
  className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold py-4 rounded-full active:scale-95 transition-all"
>
  +1
</button>

{/* --- DECREMENT -1 --- */}
<button 
  onClick={() => {
    if (inputValue !== "") {
      setInputValue(Number(inputValue) - 1);
    } else {
      dispatch({ type: 'decrement' });
    }
  }} 
  className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold py-4 rounded-full active:scale-95 transition-all"
>
  -1
</button>
          {/* <button onClick={() => dispatch({ type: 'decrement' })} className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold py-4 rounded-full transition-all active:scale-90">-1</button>
          <button onClick={() => dispatch({ type: 'increment' })} className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold py-4 rounded-full transition-all active:scale-90">+1</button> */}
          <button onClick={() => handleOperatorClick("divide")} className={`text-2xl py-4 rounded-full transition-all ${operator === 'divide' ? 'bg-white text-orange-500 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-orange-500 text-white hover:bg-orange-400'}`}>÷</button>

        
          {[7, 8, 9].map(n => (
            <button key={n} onClick={() => handleDigitClick(n)} className="bg-zinc-800 hover:bg-zinc-700 text-white text-2xl py-4 rounded-full transition-all active:scale-90 font-medium">{n}</button>
          ))}
          <button onClick={() => handleOperatorClick("multiply")} className={`text-2xl py-4 rounded-full transition-all ${operator === 'multiply' ? 'bg-white text-orange-500' : 'bg-orange-500 text-white hover:bg-orange-400'}`}>×</button>

          
          {[4, 5, 6].map(n => (
            <button key={n} onClick={() => handleDigitClick(n)} className="bg-zinc-800 hover:bg-zinc-700 text-white text-2xl py-4 rounded-full transition-all active:scale-90 font-medium">{n}</button>
          ))}
          <button onClick={() => handleOperatorClick("minus")} className={`text-3xl py-4 rounded-full transition-all ${operator === 'minus' ? 'bg-white text-orange-500' : 'bg-orange-500 text-white hover:bg-orange-400'}`}>−</button>

       
          {[1, 2, 3].map(n => (
            <button key={n} onClick={() => handleDigitClick(n)} className="bg-zinc-800 hover:bg-zinc-700 text-white text-2xl py-4 rounded-full transition-all active:scale-90 font-medium">{n}</button>
          ))}
          <button onClick={() => handleOperatorClick("plus")} className={`text-2xl py-4 rounded-full transition-all ${operator === 'plus' ? 'bg-white text-orange-500' : 'bg-orange-500 text-white hover:bg-orange-400'}`}>+</button>

          
          <button onClick={() => handleDigitClick(0)} className="col-span-2 bg-zinc-800 hover:bg-zinc-700 text-white text-2xl py-4 rounded-full px-10 text-left transition-all active:scale-95 font-medium">0</button>
         <button 
  onClick={() => {
    if (inputValue !== "") {
      setInputValue(Number(inputValue) + 5);
    } else {
      dispatch({ type: "5more" });
    }
  }} 
  className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-full text-sm"
>
  +5
</button>
          <button onClick={handleEqual} className="bg-orange-500 hover:bg-orange-400 text-white text-3xl py-4 rounded-full transition-all active:scale-90 shadow-lg shadow-orange-500/20">=</button>
        </div>
      </div>
    </div>
  );
}

export default Home;