import React, { useState } from "react";
import TareaFormulario from "./Formulario";
import Tarea from "./Tareas";
import '../stylesheets/ListaTareas.css'

function ListaTareas() {

  const [tareas, setTareas] = useState([])// Tareas se inicializa como un arreglo vacio

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) { //si el texto de la tarea no esta vacio
      tarea.texto = tarea.texto.trim(); //eliminar los espacios
      const tareasActualizadas = [tarea, ...tareas]; //queremos agregar las tareas al inicio del arreglo
      setTareas(tareasActualizadas); //reemplaza laas tareas con al actualizada
    }
  };
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas);
  };
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map(
            (tarea) =>
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
          )
        }
      </div>
    </>
  );
}
export default ListaTareas