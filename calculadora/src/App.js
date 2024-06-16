import logo from './img/pexels.jpg'
import './App.css';
import { Num, Sym } from './components/Botones.jsx'
import { BotonClear, Retroceder } from './components/Clear.jsx'
import Pantalla from './components/Pantalla.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('0'); //Valores
  const [deci, setDeci] = useState(0); //decimal
  const [oper, setOper] = useState(0); //operadores

  const value = (valor) => {
    if (!isNaN(valor)) { //ha ingresado un numero
      setInput(input + valor) // anexamos el valor
      setOper(0)
    } else { //No ha ingresado un numero
      if (valor === '.') { //ha ingresado un decimal
        setDeci(deci + 1)
        if (deci === 0) { //no habian decimales
          setInput(input + valor) // anexamos el valor
          setOper(oper + 1)
          setDeci(deci + 1)
        }
      } else { //ha ingresado un operador
        setDeci(0)//para poder operar valores con decimales tambien
        if (oper === 0) {
          setInput(input + valor) // anexamos el valor
          setOper(oper + 1)
        } else {
          if (!input.endsWith('.')) {
            const caden = input.slice(0, -1);// Toma toda la cadena menos el último carácter
            const cadenaN = caden + valor;// Combina la cadena sin el último carácter con el nuevo valor 
            setInput(cadenaN);
          }
        }
      }
    }
  };

  const calcularResu = () => {
    const Last = input.charAt(input.length - 1);// Toma el último carácter de la cadena 
    if (input && !isNaN(Last)) { //evalua que el ultimo elemento sea un numero para realizar la operacion
      let result = evaluate(input).toString();// lo pasamos a texto ya que evaluate devuelve numero
      if (!result.includes('.')) { // si no contiene decimal, reestablecemos su contador para poder poner mas
        setDeci(0)
      }
      setInput(result);
      setOper(0)
    } else {
      alert('porfavor ingrese valores')
    }
  };
  const volver = () => {
    const caden = input.slice(0, -1);// Toma toda la cadena menos el último carácter
    if (input.length === 1) {
      setInput('0')
    } else {
      setInput(caden)
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' alt='logo' />
      </div>
      <div className='calculadora'>
        <Pantalla input={input}></Pantalla>
        <div className='fila'><Num Click={value}>9</Num><Num Click={value}>8</Num><Num Click={value}>7</Num></div>
        <div className='fila'><Num Click={value}>6</Num><Num Click={value}>5</Num><Num Click={value}>4</Num></div>
        <div className='fila'><Num Click={value}>3</Num><Num Click={value}>2</Num><Num Click={value}>1</Num></div>
        <div className='fila'><Num Click={value}>00</Num><Num Click={value}>0</Num><Sym Click={value} >.</Sym></div>
        <div className='fila'><Sym Click={value}>+</Sym><Sym Click={value}>-</Sym><Sym Click={value}>*</Sym><Sym Click={value}>/</Sym></div>
        <div className='fila'><Retroceder Click={volver}>Back</Retroceder><Sym Click={calcularResu}>=</Sym></div>
        <div className='fila'><BotonClear Click={() => { setInput('0') }}>Clear</BotonClear></div>
      </div>
    </div>
  );
}

export default App;
