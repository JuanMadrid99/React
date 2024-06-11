import logo from './img/pexels.jpg'
import './App.css';
import Boton from './components/Botones.jsx'
import Pantalla from './components/Pantalla.jsx'
import Clear from './components/Clear.jsx'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');
  const agregarInput = (valor) => {
    setInput(input + valor)
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='logo' />
      </div>
      <div className='calculadora'>
        <Pantalla input={input}>hola</Pantalla>
        <div className='fila'> <Boton manejarClic={agregarInput}>9</Boton> <Boton manejarClic={agregarInput}>8</Boton> <Boton manejarClic={agregarInput}>7</Boton> <Boton manejarClic={agregarInput}>+</Boton></div>
        <div className='fila'> <Boton manejarClic={agregarInput}>6</Boton> <Boton manejarClic={agregarInput}>5</Boton> <Boton manejarClic={agregarInput}>4</Boton> <Boton manejarClic={agregarInput}>-</Boton></div>
        <div className='fila'> <Boton manejarClic={agregarInput}>3</Boton> <Boton manejarClic={agregarInput}>2</Boton> <Boton manejarClic={agregarInput}>1</Boton> <Boton manejarClic={agregarInput}>X</Boton></div>
        <div className='fila'> <Boton manejarClic={agregarInput}>=</Boton> <Boton manejarClic={agregarInput}>0</Boton> <Boton manejarClic={agregarInput}>.</Boton> <Boton manejarClic={agregarInput}>/</Boton></div>
        <div className='fila'> <Clear>Clear</Clear></div>
      </div>
    </div>
  );
}

export default App;
