import React, { Component } from 'react';
import Pokecard from '../pokecard/pokecard';
import './pokedex.css';
class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
      { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
      { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
      { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
      { id: 133, name: 'Eevee', type: 'normal', exp: 65 }
    ]
  };

  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex !</h1>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard name={p.name} id={p.id} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
