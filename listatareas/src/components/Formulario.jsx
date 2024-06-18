import React, { useState } from "react";
import '../stylesheets/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid'

function TareaFormulario(props) {
  const [input, setInput] = useState('')

  const manejarCambio = (e) => {
    setInput(e.target.value)
  };

  const manejarEnvio = (e) => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
  props.onSubmit(tareaNueva)//cuando se envia el formulario
  };
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input className="tarea-input" name="texto" type="text" placeholder="Escribe una tarea" onChange={manejarCambio}/>
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario;