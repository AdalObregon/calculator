import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else{
      alert('Por favor ingrese valores para realizar los cambios')
    }
  }

  return (
    <div className='App'>
      <div className='calculator__container'>
        <Input input={input} />
        <div className='row'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='row'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='row'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='row'>
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton manejarClear={ () => setInput("") }>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
