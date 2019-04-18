import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Sprite = styled.img`
  width: 18em;
  height: 18em;
`;

const TYPE_COLORS = {
  bug: "A6B91A",
  dark: "705746",
  dragon: "6F35FC",
  electric: "F7D02C",
  fairy: "D685AD",
  fighting: "C22E28",
  fire: "EE8130",
  flying: "A98FF3",
  ghost: "735797",
  grass: "7AC74C",
  ground: "E2BF65",
  ice: "96D9D6",
  normal: "A8A77A",
  poison: "A33EA1",
  psychic: "F95587",
  rock: "B6A136",
  steel: "B7B7CE",
  water: "6390F0"
};

export default class Pokemon extends Component {
  state = {
    name: "",
    type: [],
    pokemonNumber: "",
    imageUrl: "",
    evolutionChain: []
  };

  async componentDidMount() {
    const { pokemonId } = this.props.match.params;
    const pokemonUrl = `http://localhost:3000/api/v1/pokemon/${pokemonId}`;

    const response = await axios.get(pokemonUrl);
    const name = response.data["data"].name;
    const type = response.data["data"].type;
    const pokemonNumber = response.data["data"].pokemon_number;
    const imageUrl = response.data["data"].sprite;
    const evolutionChain = response.data["data"].evolution_chain;

    this.setState({
      name,
      type,
      pokemonNumber,
      imageUrl,
      evolutionChain
    });
  }
  showEachEvolutionInChain(evolution) {
    if (evolution === this.state.evolutionChain.slice(-1)[0]) {
      return evolution;
    } else {
      return evolution + " -> ";
    }
  }
  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.pokemonNumber}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  <h5>
                    {this.state.type.map(type => (
                      <span
                        key={type}
                        className="badge badge-primary badge-pill mr-1"
                        style={{
                          backgroundColor: `#${TYPE_COLORS[type]}`,
                          color: "white",
                          textTransform: "capitalize"
                        }}
                      >
                        {type}
                      </span>
                    ))}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="text-center">
              <Sprite
                draggable="false"
                src={this.state.imageUrl}
                className="card-img-top rounded mx-auto"
              />
            </div>
            <div className="text-center">
              <h4 className="mx-auto" style={{ textTransform: "capitalize" }}>
                {this.state.name}
              </h4>
            </div>
            <div className="text-center">
              <h5>
                {this.state.evolutionChain.map(evolution => (
                  <span
                    key={evolution}
                    style={{
                      textTransform: "capitalize"
                    }}
                  >
                    {this.showEachEvolutionInChain(evolution)}
                  </span>
                ))}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
