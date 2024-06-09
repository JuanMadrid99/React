import { Testimonio } from './components/Testimonio'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestras mascotas</h1>
        <Testimonio nombre='Pichu' casa='Madrid' imagen='1' cargo='Mascota' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum error assumenda esse consectetur. Cum quo quisquam beatae dicta distinctio voluptates, obcaecati sunt iste ab odio. Quo repellendus necessitatibus magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum error assumenda esse consectetur. Cum quo quisquam beatae dicta distinctio voluptates, obcaecati sunt iste ab odio. Quo repellendus necessitatibus magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum error assumenda esse consectetur. Cum quo quisquam beatae dicta distinctio voluptates, obcaecati sunt iste ab odio. Quo repellendus necessitatibus magnam!' />
        <Testimonio nombre='Pishu' casa='Madrid' imagen='2' cargo='Ninguno' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum error assumenda esse consectetur. Cum quo quisquam beatae dicta distinctio voluptates, obcaecati sunt iste ab odio. Quo repellendus necessitatibus magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum error assumenda esse consectetur. Cum quo quisquam beatae dicta distinctio voluptates, obcaecati sunt iste ab odio. Quo repellendus necessitatibus magnam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum error assumenda esse consectetur. Cum quo quisquam beatae dicta distinctio voluptates, obcaecati sunt iste ab odio. Quo repellendus necessitatibus magnam!' />
      </div>
    </div>
  );
}

export default App;
