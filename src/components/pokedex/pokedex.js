import React, { Component } from 'react';
import Pokecard from '../pokecard/pokecard';
import './pokedex.css';
class Pokedex extends Component {
  render() {
    let title;

    if (this.props.isWinner) {
      title = <h1 className="Pokemon-winner">Winner Hand</h1>;
    } else {
      title = <h1 className="Pokemon-loser">Loser Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <p>Total exp: {this.props.exp}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(pokemon => (
            <Pokecard
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.type}
              exp={pokemon.exp}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
