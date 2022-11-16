import React from 'react';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Headeryuli from "./components/header";
import Footeryuli from "./components/footer";


import logo from './portada.png';

/*const element = (
    <div className='colorfecha'>
      <h1>05/11/2022</h1>
    </div>
);*/

/*const Titulo = (
  <div className='colorTitulo'>
    <h1>Mis peliculas favoritaas</h1>
  </div>
)*/

/*const lista = (
  <div>
    <ul>
      <li><strong>No se aceptan devoluciones</strong></li>
      <li>Las 50 sombras de grey</li>
      <li><strong>The advengers</strong></li>
      <li>Transformers</li>
      <li><strong>La cabaña</strong></li>
    </ul>
  </div>
);*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="portada" />
        <Headeryuli/>
        
        <Footeryuli></Footeryuli>
      </header>
    </div>
  );
}

export default App;
