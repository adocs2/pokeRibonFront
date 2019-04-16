import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import pokegif from "./poke.gif"

export default class PokemonList extends Component {
  state = {
    url: "http://localhost:3000/api/v1/pokemon",
    pokemon: null
  };
  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data["data"] });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                pokemonNumber={pokemon.pokemon_number}
                name={pokemon.name}
                imageUrl={pokemon.sprite}
              />
            ))}
          </div>
        ) : (
          <img className="rounded mx-auto d-block" src={pokegif}></img>
        )}
      </React.Fragment>
    );
  }
}
