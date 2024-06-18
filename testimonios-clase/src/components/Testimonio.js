import React from 'react'
import '../stylesheets/Testimonio.css'

class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../img/testi${this.props.imagen}.jpg`)} alt={`foto de ${this.props.nombre}`} /> {/* [uede ser una self-closing tag] */}
        <div className='contenedor-texto'>
          <p className='nombre-testimonio'><strong>{this.props.nombre}</strong></p>
          <p className='cargo-testimonio'>{this.props.cargo} en {this.props.casa}</p>
          <p className='texto-testimonio'>"{this.props.texto}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonio