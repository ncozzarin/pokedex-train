import React from 'react';
import { useSelector } from 'react-redux';
import "./styles/output.css";
import "./Components/Pokemonlist";
import HomeScreen from '../src/Layouts/Homescreen';
import Detailscreen from '../src/Layouts/Detailscreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  const data = useSelector(state => {
    console.log(state);
  });
  return (
    <Router>
      <Route path="/" component={HomeScreen}/>
      <Route path="123" component={Detailscreen}/>
    </Router>
    );
}

export default App;
