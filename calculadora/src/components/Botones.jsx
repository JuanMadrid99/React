import React from "react";
import '../stylesheets/Botones.css'

function Num(props) {
  return (
    <button className={`boton-contenedor`}
      onClick={() => props.Click(props.children)}>
      {props.children}
    </button>
  );
}
function Sym(props) {
  return (
    <button className={`boton-contenedor operador`}
      onClick={() => props.Click(props.children)}>
      {props.children}
    </button>
  );
}
export {Num,Sym};