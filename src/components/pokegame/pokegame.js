import React, { Component } from 'react';
import Pokedex from '../pokedex/pokedex';

class Pokegame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }
  componentDidMount() {
    for (var i = 0; i < 8; i++) {
      fetch(
        'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 809)
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              pokemon: [
                ...this.state.pokemon,
                {
                  id: result.id,
                  type: result.types[0].type.name,
                  name: result.name,
                  exp: result.base_experience
                }
              ]
            });
          },
          error => {
            console.log('error: ', error);
          }
        );
    }
  }

  render() {
    const { pokemon } = this.state;
    let hand1 = [];
    let hand2 = [...pokemon];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);

    let page = (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
    if (this.state.pokemon.length !== 8) {
      page = <h1>Loading</h1>;
    }
    return <div className="wrapper">{page}</div>;
  }
}

export default Pokegame;
