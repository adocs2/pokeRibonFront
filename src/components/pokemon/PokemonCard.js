import React, { Component } from "react";
import styled from "styled-components";

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
    imageUrl: ""
  };
  componentDidMount() {
    const { pokemonNumber, name, imageUrl } = this.props;

    this.setState({
      pokemonNumber,
      name,
      imageUrl
    });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Card className="card">
          <h5 className="card-header">{this.state.pokemonNumber}</h5>
          <Sprite draggable="false" className="card-img-top rounded mx-auto mt-2" src={this.state.imageUrl}></Sprite>
          <div className="card-body mx-auto">
            <h6 className="card-tittle" style={{ textTransform: 'capitalize'}}>{this.state.name}</h6>
          </div>
        </Card>
      </div>
    );
  }
}
