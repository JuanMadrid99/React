import React from "react";
import '../stylescheets/Contador.css'
function Contador({ numClics }) {
  return (
    <div className="contador">
      {numClics}
    </div>
  );
}
export default Contador