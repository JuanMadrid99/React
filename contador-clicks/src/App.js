import './App.css';
import SMB from './img/SMB.jpg'
import Boton from './components/button.jsx';
import Contador from './components/contador.jsx'
import { useState } from 'react'; //useState es un hook

function App() {
  const [numClics, setNumClics] = useState(0)
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0)
  };
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={SMB} alt='logo' />
      </div>
      <div className='contenedor-principal' >
        <Contador numClics={numClics} />
        <Boton texto='Click' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;