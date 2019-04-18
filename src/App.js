import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Pokemon from "./components/pokemon/Pokemon"
import DashBoard from "./components/layout/DashBoard";
import PokemonCreate from './components/pokemon/PokemonCreate'
import PokemonEdit from './components/pokemon/PokemonEdit'
import background from "./vector-pokemon-badges-patterns.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${background})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route exact path="/pokemon/:pokemonId" component={Pokemon}/>
              <Route exact path="/create-pokemon" component={PokemonCreate}/>
              <Route exact path="/edit-pokemon/:pokemonId" component={PokemonEdit}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
