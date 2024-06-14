import logo from './img/pexels.jpg'
import './App.css';
import { Num, Sym } from './components/Botones.jsx'
import Pantalla from './components/Pantalla.jsx'
import Clear from './components/Clear.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState(0); //Valores
  const [Op, addOP] = useState(0); //Operador
  const [Dot, addDot] = useState(0); //Punto decimal

  const addNum = (valor) => {
    setInput(input + valor)
    addOP(Op * 0)
  };
  const addSym = (valor) => {
    if (Dot === 0) {
      setInput(input + valor);
      addOP(Op + 1)
    }

    if (Op === 0) {
      setInput(input + valor);
      addOP(Op + 1)
    }
    else {
      const Old = input.slice(0, -1);// Toma toda la cadena menos el último carácter
      const New = Old + valor;// Combina la cadena sin el último carácter con el nuevo valor
      setInput(New);
    }
  };
  const calcularResu = () => {
    const Last = input.charAt(input.length - 1);// Toma el último carácter de la cadena 
    if (input && !isNaN(Last)) { //evalua que el ultimo elemento sea un numero para realzia la operacion
      setInput(evaluate(input));
    }
    else {
      alert('porfavor ingrese valores')
    }
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='logo' />
      </div>
      <div className='calculadora'>
        <Pantalla input={input}></Pantalla>
        <div className='fila'><Num Click={addNum}>9</Num><Num Click={addNum}>8</Num><Num Click={addNum}>7</Num></div>
        <div className='fila'><Num Click={addNum}>6</Num><Num Click={addNum}>5</Num><Num Click={addNum}>4</Num></div>
        <div className='fila'><Num Click={addNum}>3</Num><Num Click={addNum}>2</Num><Num Click={addNum}>1</Num></div>
        <div className='fila'><Num Click={addNum}>00</Num><Num Click={addNum}>0</Num><Sym Click={addSym}>.</Sym></div>
        <div className='fila'><Sym Click={addSym}>+</Sym><Sym Click={addSym}>-</Sym><Sym Click={addSym}>*</Sym><Sym Click={addSym}>/</Sym></div>
        <div className='fila'><button >Back</button><Sym Click={calcularResu}>=</Sym></div>
        <div className='fila'><Clear Click={() => { setInput('0') }}>Clear</Clear></div>
      </div>
    </div>
  );
}

export default App;
