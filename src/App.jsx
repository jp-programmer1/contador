import { useState } from 'react';
import './App.css';

const App = () => {
  const [contador, setContador] = useState(0);
  const [temaClaro, setTemaClaro] = useState(true);
  
  const sumar = (event) => {
    event.preventDefault();
    setContador((currentContador) => currentContador + 1);
  }

  const cambiarTema = (event) => {
    event.preventDefault();
    setTemaClaro((current) => !current);
  }

  return (
    <div className={temaClaro ? 'tema-claro' : 'tema-oscuro'}>
      <button type='button' onClick={cambiarTema}>
        Cambiar {temaClaro ? <i className="fas fa-moon" /> : 'Claro'}
      </button>
      <h1>{contador}</h1>
      <button type='button' onClick={sumar}>
        <i className='fas fa-plus' />
      </button>
    </div>
  )
}

export default App
