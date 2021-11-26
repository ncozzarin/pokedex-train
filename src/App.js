import React from 'react';
import "./styles/output.css";
import "./Components/Pokemonlist";
import HomeScreen from '../src/Layouts/Homescreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SinglePokemonPage } from './Layouts/SinglePokemonPage';



function App(props) {
  return (
    <Router>
      <Route path="/" component={HomeScreen}/>
      <Route exact path="/posts/:pokemonId" component={SinglePokemonPage}/>
    </Router>
    );
}

export default App;
