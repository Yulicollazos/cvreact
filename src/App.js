import React from 'react';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Headeryuli from "./components/header";
import Footeryuli from "./components/footer";


import logo from './portada.png';

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
