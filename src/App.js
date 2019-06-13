import React from 'react';
import './App.css';
import Pokecard from './components/pokecard/pokecard';
function App() {
  return (
    <div className="App">
      <Pokecard name="Charmander" id={4} type="fire" exp={62} />
    </div>
  );
}

export default App;
