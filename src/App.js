import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // make usestate for the previous value, current value, user input, chosen operator, and total
  const [before, setBefore] = useState("");
  const [current, setCurrent] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    // checks if . is already included in current
    if (current.includes(".") && e.target.innerText === ".") return;
// if total = true, reset before
    if (total) {
      setBefore("");
    }
// if theres a number in current, the next number is added to the end. set total to false for next calculation
    current ? setCurrent((x) => x + e.target.innerText) : setCurrent(e.target.innerText);
    setTotal(false);
  };
// every time current changes setinput is set to current
  useEffect(() => {
    setInput(current);
  }, [current]);
// sets setinput to 0 on startup
  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    // calculations continue
      setTotal(false);
      setOperator(e.target.innerText);
      // checks for value before operator
      if (current === "") return;
      // if there is a previous value, use that to calculate next value
     if (before !== "") {
      
        equals();
     } else {
      
      setBefore(current);
      setCurrent("");
    }
  };
  
  
  const equals = (e) => {
    // when = is pressed set total to true
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    // var for final calculation
    let calc;
    // check operator with switch
    switch (operator) {
      case "/":
        calc = String(parseFloat(before) / parseFloat(current));
        console.log(calc)
        break;

      case "+":
        calc = String(parseFloat(before) + parseFloat(current));
        console.log(calc)
        break;
      case "x":
        calc = String(parseFloat(before) * parseFloat(current));
        console.log(calc)
        break;
      case "-":
        calc = String(parseFloat(before) - parseFloat(current));
        console.log(calc)
        break;
      default:
        return;
    }
    setInput("");
    setBefore(calc);
    setCurrent("");
  };

// resets values when all-clear is pressed
  const reset = () => {
    console.log("HELLO")
    setBefore("");
    setCurrent("");
    setInput("0");
    setOperator(null)
  };
  return (
    <div className='calculator'>
      {/* could not figure out how to output to screen */}
      {/* used buttons and css from calculator in class */}
      <h1>could not figure out how to get screen to work. totals work and displayed in console</h1>
      <div className='screen'> {input}
          </div>
      <div className='calculator-keys'>
      <button onClick={operatorType} type="button" className="operator" value="+">+</button>
        <button onClick={operatorType} type="button" className="operator" value="-">-</button>
        <button onClick={operatorType} type="button" className="operator" value="x">x</button>
        <button onClick={operatorType} type="button" className="operator" value="/">/</button>


        <button onClick={inputNum} type="button" value="7">7</button>
        <button onClick={inputNum} type="button" value="8">8</button>
        <button onClick={inputNum} type="button" value="9">9</button>

        <button onClick={inputNum} type="button" value="4">4</button>
        <button onClick={inputNum} type="button" value="5">5</button>
        <button onClick={inputNum} type="button" value="6">6</button>

        <button onClick={inputNum} type="button" value="1">1</button>
        <button onClick={inputNum} type="button" value="2">2</button>
        <button onClick={inputNum} type="button" value="3">3</button>
        <button onClick={inputNum} type="button" value="0">0</button>
        <button onClick={inputNum} type="button" className="decimal" value=".">.</button>
        <button onClick={reset} type="button" className="all-clear" value="all-clear">AC</button>
        <button onClick={equals} type="button" className="operator" id="equal-sign" value="="> = </button>
           </div>
    </div>
  );
}

export default App;
