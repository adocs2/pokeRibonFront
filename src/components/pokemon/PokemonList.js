import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import pokegif from "./poke.gif";

export default class PokemonList extends Component {
  state = {
    url: "http://localhost:3000/api/v1/pokemon",
    pokemon: null,
    search: ""
  };
  async componentDidMount() {
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data["data"] });
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let filteredPokemons
      if(this.state.pokemon !== null){
          filteredPokemons = this.state.pokemon.filter(pokemon => {
              return pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
      } else{
        filteredPokemons = ""
      }
    return (
      <React.Fragment>
        <input
          type="text"
          style={{width: "200px"}}
          placeholder="Search Pokémons by name"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        {filteredPokemons ? (
          <div className="row">
            {filteredPokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                pokemonId={pokemon["_id"]["$oid"]}
                pokemonNumber={pokemon.pokemon_number}
                name={pokemon.name}
                imageUrl={pokemon.sprite}
                type={pokemon.type}
              />
            ))}
          </div>
        ) : (
          <img className="mx-auto d-block" src={pokegif} />
        )}
      </React.Fragment>
    );
  }
}
