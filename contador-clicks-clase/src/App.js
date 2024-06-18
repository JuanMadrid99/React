import React from 'react';
import './App.css';
import SMB from './img/SMB.jpg'
import Boton from './components/button.jsx';
import Contador from './components/contador.jsx'

class App extends React.Component {
  constructor() {
    super() // es lo que permite heredar toda la funcionalidad de react.component
    this.state = { //objeto que contiene todas las propiedades que definen el estado del componente
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this) //bind permite asociar el 'this' en el constructor con el 'this' en los metodos. aosica el valor actual del this en otros contextos manteniendo el contexto original
    this.reiniciarContador = this.reiniciarContador.bind(this)
  }
  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }
  reiniciarContador() {
    this.setState({ numClics: 0 })
  }
  render() {
    return (
      <div className="App">
        <div className='logo-contenedor'>
          <img className='logo' src={SMB} alt='logo' />
        </div>
        <div className='contenedor-principal' >
          <Contador numClics={this.state.numClics} />
          <Boton texto='Click' esBotonDeClic={true} manejarClic={this.manejarClic} />
          <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;