import React from 'react';
import "./styles/output.css";
import "./Components/Pokemonlist";
import HomeScreen from './Layouts/Homescreen';
import Detailscreen from '../Layouts/Detailscreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen}/>
      <Route path={`/${pokemon.name}`} component={HomeScreen}/>
    </Router>
    );
}

export default App;
