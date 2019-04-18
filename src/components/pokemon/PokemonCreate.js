import React, { Component } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/lib/Creatable";
import axios from "axios";

const options = [
  { value: "fire", label: "Fire" },
  { value: "water", label: "Water" },
  { value: "grass", label: "Grass" },
  { value: "poison", label: "Poison" },
  { value: "ice", label: "Ice" },
  { value: "dragon", label: "Dragon" },
  { value: "electric", label: "Electric" },
  { value: "fairy", label: "Fairy" },
  { value: "steel", label: "Steel" },
  { value: "bug", label: "Bug" },
  { value: "normal", label: "Normal" },
  { value: "dark", label: "Dark" },
  { value: "rock", label: "Rock" },
  { value: "ground", label: "Ground" },
  { value: "ghost", label: "Ghost" },
  { value: "psychic", label: "Psychic" },
  { value: "fighting", label: "Fighting" },
  { value: "flying", label: "Flying" }
];

export default class PokemonCreate extends Component {
  state = {
    name: "",
    type: [],
    imageUrl: "",
    evolutionChain: []
  };

  handleInputChange() {
    return e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }
  handleChangeType = selectedOption => {
    this.setState({ type: selectedOption });
  };

  handleChangeEvolution = selectedOption => {
    this.setState({ evolutionChain: selectedOption });
  };

  clearType() {
    this.setState({ type: [] });
  }

  submitFormHandler(state) {
    const typeValue = state.type.map(type => type.value);
    const evolutionChainFinal = state.evolutionChain.map(
      evolution => evolution.value
    );
    evolutionChainFinal.unshift(state.name);
    axios.post("http://localhost:3000/api/v1/pokemon", {
      name: state.name,
      type: typeValue,
      sprite: state.imageUrl,
      evolution_chain: evolutionChainFinal
    });
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div />
          <form>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange()}
            />
            <br />
            <label htmlFor="type">Types</label>
            <Select
              isDisabled={this.state.type.length === 2 ? true : false}
              id="type"
              name="type"
              value={this.state.type}
              onChange={this.handleChangeType}
              options={options}
              isMulti={true}
            />
            <input
              type="button"
              value="Clear types"
              onClick={() => {
                this.clearType();
              }}
            />
            <br />
            <label htmlFor="imageUrl">Image Url</label>
            <input
              placeholder="Type a image url"
              autoComplete="off"
              type="text"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleInputChange()}
            />
            <br />
            <label htmlFor="evolutionChain">Evolution Chain</label>
            <CreatableSelect
              noOptionsMessage={() => null}
              placeholder="Type each Pokemon in the evolution chain and press Enter (it does not include the Pokémon being created)"
              isMulti
              id="evolutionChain"
              openMenuOnClick={false}
              name="evolutionChain"
              value={this.state.evolutionChain}
              onChange={this.handleChangeEvolution}
            />
            <br />
            <input
              style={{ float: "right" }}
              type="button"
              value="Create Pokémon"
              onClick={() => {
                this.submitFormHandler(this.state);
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}
