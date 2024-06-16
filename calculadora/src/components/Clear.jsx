import React from "react";
import '../stylesheets/Clear.css'

const BotonClear = (props)=>{
  return(
    <div className="boton-clear" onClick={props.Click}>
      {props.children}
    </div>
  )
};
const Retroceder = (props)=>{
  return(
  <button className="boton-clear" onClick={props.Click}>
    {props.children}
  </button>    
  )
}

export {BotonClear,Retroceder};