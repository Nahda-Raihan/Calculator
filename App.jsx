import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  // const [output, setOutput] = useState("");
  // const [input, setInput] = useState("")

  
  const [input, setInput] = useState(()=>{
    const storedInput=localStorage.getItem("inputValues")
    return storedInput ? storedInput:"";
  });

  const [output, setOutput] = useState(()=>{
    const storedOutput= localStorage.getItem("outputValues")
    return storedOutput ? storedOutput:0;
  });

  useEffect(()=>{
    localStorage.setItem("inputValues",input.toString())
  },[input])

  useEffect(()=>{
    localStorage.setItem("outputValues",output.toString())
  },[output])


  

  const handleClick = (event) => {
    const value = event.target.value;
    if (
      (value === "+" || value === "-" || value === "*" || value === "/") &&
      input === ""
    ) 
    {
      return;
    }

    if (value === "." && input.includes(".")) 
    {
      return;
    }
    
    if (value === "sin") {
      toCalculateSin();
    } else if (value === "cos") {
      toCalculateCos();
    } else if (value === "tan") {
      toCalculateTan();
    } else {
      setInput(input.concat(value));
    }
    setInput(input.concat(value));
  }

  const toClear = () => {
    localStorage.clear();
    setOutput("");
    setInput("");
  }

  const toCalculation=()=>{
    try{
    setOutput(eval(input).toString())
    }
    catch(error){
      setOutput(error)
    }

    // setOutput(eval(input))
  }


  const toCalculateSin = () => {
    // const result = Math.sin(parseFloat(input));
    // setOutput(result);
    setOutput(Math.sin(parseFloat(input)))
  };
  
  const toCalculateCos = () => {
    const result = Math.cos(parseFloat(input));
    setOutput(result);
  };
  
  const toCalculateTan = () => {
    const result = Math.tan(parseFloat(input));
    setOutput(result);
  };
  
  const toBackspace = () => {
    const value = input.slice(0, -1)
    setInput(value)
  }

  return (
    <>
      <div className="calculator">

        <input type='text' placeholder='0' value={input} readOnly />
        <input type='text' value={output} readOnly />

        <div className="keypad">
          <button value="7" onClick={handleClick}>7</button>
          <button value="8" onClick={handleClick}>8</button>
          <button value="9" onClick={handleClick}>9</button>
          <button value="+" onClick={handleClick}>+</button>
          <button value="4" onClick={handleClick}>4</button>
          <button value="5" onClick={handleClick}>5</button>
          <button value="6" onClick={handleClick}>6</button>
          <button value="-" onClick={handleClick}>-</button>
          <button value="1" onClick={handleClick}>1</button>
          <button value="2" onClick={handleClick}>2</button>
          <button value="3" onClick={handleClick}>3</button>
          <button value="*" onClick={handleClick}>*</button>
          <button value="0" onClick={handleClick}>0</button>
          <button value="." onClick={handleClick}>.</button>
          <button value="=" id="result" onClick={toCalculation}>=</button>
          <button value="/" onClick={handleClick}>/</button>
          <button value="%" onClick={handleClick}>%</button>
          <button value="sin" onClick={handleClick}>sin</button>
          <button value="cos" onClick={handleClick}>cos</button>
          <button value="tan" onClick={handleClick}>tan</button>
          <button value="clear" id="clear" onClick={toClear}>Clear</button>
          <button value="delete" id="delete" onClick={toBackspace}>DEL</button>
        </div>
      </div>
    </>
  )

}

export default App
