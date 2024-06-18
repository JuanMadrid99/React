import logo from './img/pexels.jpg'
import ListaTareas from './components/ListaTareas.jsx'

import './App.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
