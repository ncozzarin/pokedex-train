import React, { useEffect } from 'react';
import "./styles/output.css";
import "./Layouts/Pokemonlist";
import HomeScreen from '../src/Layouts/Homescreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SinglePokemonPage } from './Layouts/SinglePokemonPage';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from './features/pokemons/pokemonsSlice';



function App(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {
      //Aca esta el dispatch de todos los pokemons para tenerlos disponibles en el montaje de la app
      dispatch(fetchPokemons(20));
  }, []);
  
  return (
    <Router>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/pokemons/:name" component={SinglePokemonPage}/>
    </Router>
    );
}

export default App;
