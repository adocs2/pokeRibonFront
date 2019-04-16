import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0.12), 0 1px 2px rgba(0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0.25), 0 10px 10px rgba(0, 0, 0.22);
  }
`;

export default class PokemonCard extends Component {
  state = {
    pokemonNumber: "",
    name: "",
    imageUrl: "",
    type: []
  };
  componentDidMount() {
    const { pokemonNumber, pokemonId, name, imageUrl, type } = this.props;

    this.setState({
      pokemonNumber,
      pokemonId,
      name,
      imageUrl,
      type
    });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Link
          to={`pokemon/${this.state.pokemonId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <h5>{this.state.pokemonNumber}</h5>
                </div>
                <div className="col-9">
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
            <Sprite
              draggable="false"
              className="card-img-top rounded mx-auto mt-2"
              src={this.state.imageUrl}
            />
            <div className="card-body mx-auto">
              <h6
                className="card-tittle"
                style={{ textTransform: "capitalize" }}
              >
                {this.state.name}
              </h6>
            </div>
          </Card>
        </Link>
      </div>
    );
  }
}
