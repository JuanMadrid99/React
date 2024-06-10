import React from "react";
import '../stylescheets/Boton.css'
function Boton( { texto, esBotonDeClic, manejarClic } ) { /* desestructuracion es mas comun de usar */
  return (
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>
      {texto}
    </button >
  );
}
export default Boton;