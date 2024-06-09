import '../stylesheets/Testimonio.css'

export function Testimonio(props) { //componente funcional
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../img/testi${props.imagen}.jpg`)} alt='testimonio1' /> {/* [uede ser una self-closing tag] */}
      <div className='contenedor-texto'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
        <p className='cargo-testimonio'>{props.cargo} en {props.casa}</p>
        <p className='texto-testimonio'>"{props.texto}"</p>
      </div>
    </div>
  );
} 

export default Testimonio